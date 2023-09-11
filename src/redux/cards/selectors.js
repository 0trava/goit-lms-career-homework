const savedFavorites = JSON.parse(localStorage.getItem('favoriteCars'));

export const getCards = state => state.cards.cards;
export const favoriteCards = state => state.cards.cardsList.filter((card) => savedFavorites.includes(card.id));
export const cardsInList = state => state.cards.cardsList.length;