import { CardsItem } from 'components/pages/Catalog/Cardsitem/CardsItem'
import React, {useEffect, useState } from 'react'
import './Catalog.css'
import { useDispatch, useSelector } from 'react-redux';
import { cardsInList, getAllCards, getCards } from 'redux/cards/selectors';
import { fetchAllCards, fetchCards } from 'redux/cards/operetions';
import { Loader } from 'components/elements/Loader/Loader';
import { DetailedCard } from './DetailedCard/DetailedCard';
import { Modal } from 'components/elements/Modal/Modal';
import { Filter } from 'components/elements/Filter/Filter';

export const Catalog = () => {
  const dispatch = useDispatch() 
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);
  const [loading, setLoading] = useState(false);
  const [cardToOpen, setCardToOpen] = useState([]);
  const [isButtonVisible, setButtonVisibility] = useState('Catalog__btn--more');
  const [page, setPage] = useState(1);
  const [filterList, setFilterList] = useState([]);
  
// GET CARDS LIST
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
    setLoading(false);
    dispatch(fetchCards(page));
    dispatch(fetchAllCards());
    }, 1000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


let cardList = useSelector(getCards);
const numberOfCards = useSelector(cardsInList);
const allCardList = useSelector(getAllCards);

  // Modal for DetailedCard
  const openModal = (card) => {
    setCardToOpen(card);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };


  // Get NEXT PAGE
const getnextPage = (e) => {
  e.preventDefault();
  const pages = numberOfCards / 8;
  setPage(page + 1);
  dispatch(fetchCards(page+1));
  if ((page + 1) >= pages ) {
    setButtonVisibility('Catalog__btn--unvisibil');
  } else {
    setButtonVisibility('Catalog__btn--more');
  }
}



// Filter cards
const filterCards = (Brands, Price, mileageFrom, mileageTo) => {
  let filterList = [];
  if (Brands) {
    filterList = allCardList.filter((item) => item.make === Brands)
  } else {filterList = cardList};
  if (Price) {
    filterList = filterList.filter((item) => item.rentalPrice.replace(/\$/g, '') >= Price)
  };
  if (mileageFrom) {
    filterList = filterList.filter((item) => mileageFrom >= item.mileage >= mileageTo)
  };
  console.log(filterList);
  setFilterList(filterList);
  setButtonVisibility('Catalog__btn--unvisibil');
}


  // INPUT List of car brands
  const carBrands = [...new Set(cardList.map(car => car.make))];
 // INPUT List of car price
 const priceList = [...new Set(cardList.map(car => car.rentalPrice.replace(/\$/g, '')))];
 const carPrice = priceList.sort((a, b) => {return parseInt(a, 10) - parseInt(b, 10);});
 


  const setFavorite = (e) => {}

  return (
    <div className='Catalog__container'>
      {/* Header Filter */}
      <Filter 
        carBrands={carBrands}
        carPrice ={carPrice}
        filterCards={filterCards}
        />
        
      {/* Catalog */}
        {loading ? 
          <Loader className='Catalog__loader'/>
         : 
         <><ul className='Catalog__list'>
          {filterList.length >= 1 ? 
            <>
            {filterList.map((card, index) => {
              return (
                <CardsItem key={index} card={card}  openModal={openModal} setFavorite={setFavorite}/>
              )
            })}
            </>
          :
          <>
          {cardList.map((card, index) => {
            return (
              <CardsItem key={index} card={card}  openModal={openModal} setFavorite={setFavorite}/>
            )
          })}
          </>
          }

           </ul> 
                 {/* Button  Load more*/}
            <button 
            type='button' 
            className={isButtonVisible}
            onClick={getnextPage}
            >
              Load more
          </button>
          </>
          }


    {/* Modal Window */}
    {showModal && (
        <Modal onClose={toggleModal}>
          <DetailedCard  closeModal={closeModal} card={cardToOpen}/>
        </Modal>
      )}
        
    </div>
  )
}
