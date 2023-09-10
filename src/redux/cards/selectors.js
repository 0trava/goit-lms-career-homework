const savedFavorites = JSON.parse(localStorage.getItem('favoriteCars'));

export const getCards = state => state.cards.cards;
export const favoriteCards = state => state.cards.cards.filter((card) => savedFavorites.includes(card.id));