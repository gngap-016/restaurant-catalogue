import RestaurantList from '../views/pages/restaurant-list';
import RestaurantDetail from '../views/pages/restaurant-detail';
import Favorite from '../views/pages/favorite-restaurant';

const routes = {
  '/': RestaurantList,
  '/list': RestaurantList,
  '/detail/:id': RestaurantDetail,
  '/favorite': Favorite,
};

export default routes;
