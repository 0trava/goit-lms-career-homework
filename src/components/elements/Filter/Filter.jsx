import React, { useState } from 'react';
import './Filter.css';

export const Filter = ({carPrice, carBrands}) => {
    const [selectedCarBrand, setSelectedCarBrand] = useState('');
    const [selectedCarPrice, setSelectedCarPrice] = useState('');
    // eslint-disable-next-line
    const [priceSelected, setPriceSelected] = useState(''); 
    const [mileageFrom, setMileageFrom] = useState('');
    const [mileageTo, setMileageTo] = useState('');

// --------------------------------------------------------------------
    const handleInputChange = (event) => {
        setSelectedCarBrand(event.target.value);
      };

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

// -----------------------------------------------------------------------

const formSubmit = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.cities.value)

}

  return (
    <form className='Filter__header' onSubmit={formSubmit}>

            {/* Car Brands  */}
            <div className='Filter__input'>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
            <label htmlFor="carBrandInput">Car Brand</label>
            <select 
                id="carBrands"  
                className='Filter__select'
                placeholder='Enter the text'
                // value={'Enter the text'}
                >
                <option key="0" value={""} hidden>Enter the text</option>
                {carBrands.map((brand, index) => (
                <option key={index} value={brand}>{brand}</option>
                ))}
            </select>
          </div>


          {/* Price  */}
          <div className='Filter__input'>
            <label htmlFor="carPriceInput">Price/ 1 hour</label>
            <input
              type="text"
              id="carPriceInput"
              list="carPrice"
              value={selectedCarPrice}
              placeholder='To $'
              className='Filter__select'
              onChange={handleInputChangePrice}
            />
            <datalist id="carPrice">
            {carPrice.map((price, index) => (
              <option key={index} value={price} />
            ))}
          </datalist>
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
              placeholder='From'
            />

            <input
              type="number"
              id="mileageFromInput"
              value={mileageTo}
              onChange={handleMileageToChange}
              className='Filter__input-mileage-right'
              placeholder='To'
            />
            </div>
          </div>

          <button type="submit" className='Filter__btn'>
          <span className="btn-text-one">Search</span>
           <span className="btn-text-two">Go!</span>         
            </button>


      </form> 
  )
}
