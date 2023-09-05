import { CardsItem } from 'components/elements/Cardsitem/CardsItem'
import React from 'react'

export const Catalog = () => {
  return (
    <div>
      {/* Header */}
      <div className='Catalog__header'>
        <form>
          <label htmlFor="">
            <input type="text" />
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
          <button type='submite'>Search</button>
        </form>

        {/* Catalog */}
        <ul className='Catalog__list'>
            <CardsItem/>

        </ul>
      </div>    
    </div>
  )
}
