import favoriteButtonPresenter from '../../src/scripts/utils/favorite-button-presenter';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await favoriteButtonPresenter.init({
    favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createFavoriteButtonPresenterWithRestaurant };
