import { CardsItem } from 'components/pages/Catalog/Cardsitem/CardsItem'
import React, {useEffect, useState } from 'react'
import './Catalog.css'
import { useDispatch, useSelector } from 'react-redux';
import { cardsInList, getCards } from 'redux/cards/selectors';
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


const cardList = useSelector(getCards);
const numberOfCards = useSelector(cardsInList);


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


  // INPUT List of car brands
  const carBrands = [...new Set(cardList.map(car => car.make))];
 // INPUT List of car price
 const carPrice = [...new Set(cardList.map(car => car.rentalPrice.replace(/\$/g, '')))];
 


  const setFavorite = (e) => {}

  return (
    <div className='Catalog__container'>
      {/* Header Filter */}
      <Filter 
        carBrands={carBrands}
        carPrice ={carPrice}
        />
        
      {/* Catalog */}
        {loading ? 
          <Loader className='Catalog__loader'/>
         : 
         <><ul className='Catalog__list'>
            {cardList.map((card, index) => {
              return (
                <CardsItem key={index} card={card}  openModal={openModal} setFavorite={setFavorite}/>
              )
            })}
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
