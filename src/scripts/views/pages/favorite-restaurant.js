import FavoriteRestaurantIdb from '../../data/favorite-restaurant';
// import { createRestaurantItemTemplate } from '../templates/template-creator';
import FavoriteRestaurantView from './favorited-restaurants/favorite-restaurant-view';
import FavoriteRestaurantShowPresenter from './favorited-restaurants/favorite-restaurant-show-presenter';

const view = new FavoriteRestaurantView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
  },
};

export default Favorite;
