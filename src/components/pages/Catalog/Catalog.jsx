import { CardsItem } from 'components/elements/Cardsitem/CardsItem'
import React, { useState } from 'react'
import './Catalog.css'

export const Catalog = () => {
  const [selectedCarBrand, setSelectedCarBrand] = useState('');
  const [selectedCarPrice, setSelectedCarPrice] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  // List of car brands
  const carBrands = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'Hyundai', 'Volkswagen'];
 // List of car price
 const carPrice = ['1000', '2000', '3000', '40000', '500000', '70000'];
 
  const handleInputChange = (event) => {
    setSelectedCarBrand(event.target.value);
  };

  const handleInputChangePrice = (event) => {
    setSelectedCarPrice(event.target.value);
  };

  const handleMileageFromChange = (event) => {
    setMileageFrom(event.target.value);
  };

  const handleMileageToChange = (event) => {
    setMileageTo(event.target.value);
  };

  return (
    <div>
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
          <span class="btn-text-one">Search</span>
           <span class="btn-text-two">Go!</span>         
            </button>


      </div>   
      {/* Catalog */}
        <ul className='Catalog__list'>
            <CardsItem/>

        </ul> 
    </div>
  )
}
