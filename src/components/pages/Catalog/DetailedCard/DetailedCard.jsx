
import React from 'react';
import './DetailedCard.css';
import { AiOutlineClose } from "react-icons/ai";

export const DetailedCard = ({closeModal, card}) => {
    const {rentalPrice, 
            address, 
            year, 
            make, 
            model, 
            rentalCompany, 
            type, 
            id, 
            functionalities, 
            img,
            description,
            fuelConsumption,
            engineSize,
            accessories,
            } = card;
    const typeText = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();;
    const addressPart = address.split(',').map(part => part.trim());

  return (

        <div onClick={closeModal}  className='DetailedCard_container'>
            {/* Close button */}
                <button type='button' className='DetailedCard_close'>
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
            <div className='CardsItem__dateils'>
                { accessories.map((item, index) => {
                    return (
                        <>
                        <p>{item}</p>
                        <div>|</div>
                        </>  
                    )
                })}
        
            </div>

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