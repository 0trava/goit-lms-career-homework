import { CardsItem } from 'components/pages/Catalog/Cardsitem/CardsItem'
import React, {useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { favoriteCards, getCards } from 'redux/cards/selectors';
import { fetchCards } from 'redux/cards/operetions';
import { Loader } from 'components/elements/Loader/Loader';

import { Modal } from 'components/elements/Modal/Modal';
import { DetailedCard } from '../Catalog/DetailedCard/DetailedCard';

export const Favorites = () => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);
  let [loading, setLoading] = useState(false);
  const savedFavorites = JSON.parse(localStorage.getItem('favoriteCars'));


  const [cardToOpen, setCardToOpen] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // GET CARS
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
    setLoading(false);
    dispatch(fetchCards());
    }, 1000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    let allList = useSelector(getCards);

    // Rerender change favorite
    const setFavorite = (e) => {
      const cardList = allList.filter((card) => savedFavorites.includes(card.id));
      setFavorites(cardList);
    }




    useEffect(() => {
      setFavorite()
    }, [favorites]);
  

   // Modal for DetailedCard
   const openModal = (card) => {
    setCardToOpen(card);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='Catalog__container'>
      {/* Catalog */}
      {loading ? 
          <Loader className='Catalog__loader'/>
         : <ul className='Catalog__list'>
            {favorites.map((card, index) => {
              return (
                <CardsItem key={index} card={card}  openModal={openModal} setFavorites={setFavorite}/>
              )
            })}
           </ul> 
          }

    {/* Modal Window */}
    {showModal && (
        <Modal onClose={toggleModal}>
          <DetailedCard  closeModal={closeModal} card={cardToOpen} />
        </Modal>
      )}

    </div>
  )
}
