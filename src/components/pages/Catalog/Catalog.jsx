import { CardsItem } from 'components/pages/Catalog/Cardsitem/CardsItem'
import React, {useEffect, useState } from 'react'
import './Catalog.css'
import { useDispatch, useSelector } from 'react-redux';
import { getCards } from 'redux/cards/selectors';
import { fetchCards } from 'redux/cards/operetions';
import { Loader } from 'components/elements/Loader/Loader';
import { DetailedCard } from './DetailedCard/DetailedCard';
import { Modal } from 'components/elements/Modal/Modal';

export const Catalog = () => {
  const dispatch = useDispatch() 

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);
  let [loading, setLoading] = useState(false);

  const [selectedCarBrand, setSelectedCarBrand] = useState('');
  const [selectedCarPrice, setSelectedCarPrice] = useState('');
  const [priceSelected, setPriceSelected] = useState(''); 
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');
  const [cardToOpen, setCardToOpen] = useState([])
  // let cardList = [];
  
  
// GET CARS
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
    setLoading(false);
    dispatch(fetchCards());
    }, 1000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


const cardList = useSelector(getCards);


  // Modal for DetailedCard
  const openModal = (card) => {
    setCardToOpen(card);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  // INPUT List of car brands
  const carBrands = [...new Set(cardList.map(car => car.make))];

  const handleInputChange = (event) => {
    setSelectedCarBrand(event.target.value);
  };





 // INPUT List of car price
 const carPrice = [...new Set(cardList.map(car => car.rentalPrice.replace(/\$/g, '')))];
 
  const handleInputChangePrice = (event) => {
    setPriceSelected(event.target.value);
    setSelectedCarPrice(`To ${event.target.value} $`);
  };



  const handleMileageFromChange = (event) => {
    setMileageFrom(event.target.value);
  };

  const handleMileageToChange = (event) => {
    setMileageTo(event.target.value);
  };

  return (
    <div className='Catalog__container'>
      {/* Header */}
      <div className='Catalog__header'>
            {/* Car Brands  */}
            <div className='Catalog__input'>
            <label htmlFor="carBrandInput">Car Brand</label>
            <input
              type="text"
              id="carBrandInput"
              list="carBrands"
              value={selectedCarBrand}
              placeholder='Enter the text'
              onChange={handleInputChange}
            />
            <datalist id="carBrands">
            {carBrands.map((brand, index) => (
              <option key={index} value={brand} />
            ))}
          </datalist>
          </div>


          {/* Price  */}
          <div className='Catalog__input'>
            <label htmlFor="carPriceInput">Price/ 1 hour</label>
            <input
              type="text"
              id="carPriceInput"
              list="carPrice"
              value={selectedCarPrice}
              placeholder='To $'
              onChange={handleInputChangePrice}
            />
            <datalist id="carPrice">
            {carPrice.map((price, index) => (
              <option key={index} value={price} />
            ))}
          </datalist>
          </div>

          {/* Сar mileage */}
          <div  className='Catalog__input'>
            <label htmlFor="mileageFromInput">Сar mileage / km</label>
            <div>
            <input
              type="number"
              id="mileageFromInput"
              value={mileageFrom}
              onChange={handleMileageFromChange}
              className='Catalog__input-mileage-left'
              placeholder='From'
            />

            <input
              type="number"
              id="mileageFromInput"
              value={mileageTo}
              onChange={handleMileageToChange}
              className='Catalog__input-mileage-right'
              placeholder='To'
            />
            </div>
          </div>

          <button type='submite' className='Catalog__btn'>
          <span className="btn-text-one">Search</span>
           <span className="btn-text-two">Go!</span>         
            </button>


      </div>   
      {/* Catalog */}
        {loading ? 
          <Loader className='Catalog__loader'/>
         : <ul className='Catalog__list'>
            {cardList.map((card, index) => {
              return (
                <CardsItem key={index} card={card}  openModal={openModal}/>
              )
            })}
           </ul> 
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
