
import React from 'react';
import './DetailedCard.css';
import { AiOutlineClose } from "react-icons/ai";

export const DetailedCard = ({closeModal, card}) => {
    const {rentalPrice, 
            address, 
            year, 
            make, 
            model, 
            type, 
            id, 
            img,
            description,
            fuelConsumption,
            engineSize,
            accessories,
            } = card;
    const addressPart = address.split(',').map(part => part.trim());


    // Click close window
    const closeWindow = () => {
        engineSize.preventDefault();
        closeModal();
    }

  return (

        <div onClick={closeModal}  className='DetailedCard_container'>
            {/* Close button */}
                <button type='button' className='DetailedCard_close' onClick={closeWindow}>
                    <AiOutlineClose/>
                </button>
            {/* Image */}
            <img src={img} alt="Car img" className='DetailedCard__img'/>

            {/* Header */}
            <div className='DetailedCard__title-block'>
                <h3 className='DetailedCard__title'>
                    {make} <span>{model}</span>, {year}
                </h3>
            </div>

            {/* Dateils */}
            <div className='DetailedCard__dateils'>
                <p>{addressPart[1]}</p>
                <div>|</div>
                <p>{addressPart[2]}</p>
                <div>|</div>
                <p>id: {id}</p>
                <div>|</div>
                <p>year: {year}</p>
                <div>|</div>
                <p>Type: {type}</p>
                <div>|</div>
                <p>Fuel Consumption: {fuelConsumption}</p>
                <div>|</div>           
                <p>Engine Size: {engineSize}</p>          
            </div>
            
            {/* Description */}
            <h3 className='DetailedCard__description'>{description}</h3>
            
            {/* Accessories and functionalities: */}
            <h3 className='DetailedCard__accessories-title'>Accessories and functionalities:</h3>
            <ul className='CardsItem__dateils'>
                { accessories.map((item, index) => {
                    return (
                        <li key={index}>{item} <span className='span'>|</span></li>
                    )
                })}
        
            </ul>

            {/* Rental Conditions:  */}
            <h3  className='DetailedCard__rental-title'>Rental Conditions:</h3>
            <ul className='DetailedCard__rental-list'>
                <li>Minimum age : <span>25</span></li>
                <li>Valid driver’s license</li>
                <li>Security deposite required </li>
                <li>Mileage: <span>5,858</span></li>
                <li>Price: <span>{rentalPrice}</span></li>
            </ul>


            {/* Button */}
            <button className='DetailedCard__btn'>Rental car</button>

        </div>


  )
}
