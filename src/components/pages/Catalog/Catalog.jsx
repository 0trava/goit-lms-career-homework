import { CardsItem } from 'components/elements/Cardsitem/CardsItem'
import React from 'react'
import './Catalog.css'

export const Catalog = () => {
  return (
    <div>
      {/* Header */}
      <div className='Catalog__header'>
        <form>
          <label htmlFor="brand" title='Car brand'>
            <input type="text" name="brand"/>
          </label>
          <label htmlFor="">
            <input type="text" />
          </label>
          <label htmlFor="">
            <input type="text" />
          </label>
          <label htmlFor="">
            <input type="text" />
          </label>
          <button type='submite' className='Catalog__btn'>
          <span class="btn-text-one">Search</span>
           <span class="btn-text-two">Go!</span>
            
            </button>
        </form>

        {/* Catalog */}
        <ul className='Catalog__list'>
            <CardsItem/>

        </ul>
      </div>    
    </div>
  )
}
