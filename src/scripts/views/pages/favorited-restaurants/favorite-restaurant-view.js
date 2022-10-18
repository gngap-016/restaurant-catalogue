import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantView {
  getTemplate() {
    return `
        <div class="container">
            <h1>Warteg Favorit Kamu</h1>
            <section class="warteg_list" id="warteg_list">
            </section>
        </div>
    `;
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurant(restaurants);
  }

  showFavoriteRestaurant(restaurant = []) {
    let html;
    if (restaurant.length) {
      // eslint-disable-next-line no-shadow
      html = restaurant.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('warteg_list').innerHTML = html;

    document.getElementById('warteg_list').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found restaurants__not__found">Tidak ada warteg untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantView;
