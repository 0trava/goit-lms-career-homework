import React, { useState } from 'react';
import './Filter.css';

export const Filter = ({carPrice, carBrands, filterCards}) => {
    const [mileageFrom, setMileageFrom] = useState('');
    const [mileageTo, setMileageTo] = useState('');

// --------------------------------------------------------------------

      const handleMileageFromChange = (event) => {
        setMileageFrom(event.target.value);
      };
    
      const handleMileageToChange = (event) => {
        setMileageTo(event.target.value);
      };

// -----------------------------------------------------------------------

const formSubmit = (e) => {
    e.preventDefault();
    const Brands = e.currentTarget.carBrands.value;
    const Price = e.currentTarget.carPriceInput.value;
    filterCards(Brands, Price, mileageFrom, mileageTo);
}

  return (
    <form className='Filter__header' onSubmit={formSubmit}>
            {/* Car Brands  */}
        <div className='Filter__block'>
            <div className='Filter__input'>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
            <label htmlFor="carBrandInput">Car Brand</label>
            <select 
                id="carBrands"  
                className='Filter__select-brands'
                placeholder='Enter the text'
                >
                <option key="0" value={""} hidden>Enter the text</option>
                {carBrands.map((brand, index) => (
                <option key={index} value={brand}>{brand}</option>
                ))}

            </select>
            {/* ICON */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 12.5L10 7.5L15 12.5" stroke="#121417" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>


          {/* Price  */}
          <div className='Filter__input'>
            <label htmlFor="carPriceInput">Price/ 1 hour</label>
            <select 
                id="carPriceInput"
                className='Filter__select'
                >
                <option value={""}> </option> {/* Placeholder option */}
                {carPrice.map((price, index) => (
                <option key={index} value={price}>{price}</option>
                ))}
            </select>
            {/* ICON */}
            <p className='Filter__carPriceInput-before'>To</p>
            <p className='Filter__carPriceInput-after'>$</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 12.5L10 7.5L15 12.5" stroke="#121417" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>

          {/* Сar mileage */}
          <div  className='Filter__input'>
            <label htmlFor="mileageFromInput">Сar mileage / km</label>
            <div>
            <input
              type="number"
              id="mileageFromInput"
              value={mileageFrom}
              onChange={handleMileageFromChange}
              className='Filter__input-mileage-left'
            //   placeholder='From'
            />
            <p className='Filter__span-mileage-left'>From:</p>

            <input
              type="number"
              id="mileageFromInput"
              value={mileageTo}
              onChange={handleMileageToChange}
              className='Filter__input-mileage-right'
            />
            <p className='Filter__span-mileage-right'>To:</p>
            </div>
          </div>

          <button type="submit" className='Filter__btn'>
          <span className="btn-text-one">Search</span>
           <span className="btn-text-two">Go!</span>         
            </button>


      </form> 
  )
}
