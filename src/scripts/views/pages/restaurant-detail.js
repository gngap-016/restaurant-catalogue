import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailAddReviewTemplate, createRestaurantDetailReviewTemplate, createRestaurantDetailTemplate } from '../templates/template-creator';
import favoriteButtonPresenter from '../../utils/favorite-button-presenter';
import ButtonAddReview from '../../utils/review-button-initiator';

const RestaurantDetail = {
  async render() {
    return `
        <div class="container">
            <h1>Info Warteg</h1>
            <section class="warteg" id="warteg">
            </section>
            <div class="restaurant__add_review" id="restaurantAddReview">
            </div>

            <h3>Review Mereka</h3>
            <div class="restaurant__review" id="restaurantReview"></div>
            <div id="favoriteButtonContainer"></div>
        </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.restaurantDetail(url.id);
    const restaurantContainer = document.querySelector('#warteg');
    const restaurantReviewContainer = document.querySelector('#restaurantReview');
    const restaurantAddReviewContainer = document.querySelector('#restaurantAddReview');

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    restaurantAddReviewContainer.innerHTML = createRestaurantDetailAddReviewTemplate();
    restaurantReviewContainer.innerHTML = restaurant.customerReviews.map(
      (customer) => createRestaurantDetailReviewTemplate(customer),
    ).join('');

    favoriteButtonPresenter.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        rating: restaurant.rating,
        city: restaurant.city,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        description: restaurant.description,
        foods: restaurant.menus.foods,
        drinks: restaurant.menus.drinks,
        reviews: restaurant.customerReviews,
      },
    });

    const submitAddReview = document.querySelector('.form__submit_button');
    submitAddReview.addEventListener('click', async () => {
      await ButtonAddReview.init({
        id: restaurant.id,
      });
      const result = await RestaurantSource.restaurantDetail(restaurant.id);
      restaurantReviewContainer.innerHTML = result.customerReviews.map(
        (customer) => createRestaurantDetailReviewTemplate(customer),
      ).join('');
    });
  },
};

export default RestaurantDetail;
