import React from 'react';
// import img from '../../images/img_1_test.jpg';
import './CardsItem.css';

export const CardsItem = ({card}) => {
    console.log(card);
    const {rentalPrice, address, year, make, model, rentalCompany, type, id, functionalities, img} = card;
    const typeText = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();;
    const addressPart = address.split(',').map(part => part.trim());




  return (
    <li className='CardsItem__item' id={id}>
        {/* Image */}
        <div className='CardsItem__imgblock'>
            <img src={img} alt="CardsItem__image-car" />
            {/* Add to favority */}
            <div className='CardsItem__checkbox'>            
                <label className="CardsItem__imgblock-container">
                <input onChange={()=> {}} type="checkbox"/>
                <div className="checkmark">
                    <svg viewBox="0 0 256 256">
                    <rect fill="none" height="256" width="256"></rect>
                    <path d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z" strokeWidth="20px" stroke="#FFF" fill="none"></path></svg>
                </div>
                </label>
            </div>

        </div>
        {/* Header */}
        <div className='CardsItem__title-block'>
            <h3 className='CardsItem__title'>
                {make} <span>{model}</span>, {year}
            </h3>
            <p>{rentalPrice}</p>
        </div>

        {/* Dateils */}
        <div className='CardsItem__dateils'>
            <p>{addressPart[1]}</p>
            <div>|</div>
            <div>{addressPart[2]}</div>
            <div>|</div>
            <div>{rentalCompany}</div>
            <div>|</div>
            <div>Premium???</div>
            <div>|</div>
            <div>{typeText}</div>
            <div>|</div>
            <div>{model}</div>
            <div>|</div>           
            <div>{id}</div>
            <div>|</div>
            <div>{functionalities[0]}</div>            
        </div>
        <button className='CardsItem__btn'>
        <span className="btn-text-one">Learn more</span>
        <span className="btn-text-two">Great!</span>
            
        </button>
    </li>
  )
}
