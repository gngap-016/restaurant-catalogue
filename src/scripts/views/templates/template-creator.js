import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
    <article class="card">
        <img class="card__poster lazyload" 
            data-src="${CONFIG.BASE_IMAGE_URL_MD + restaurant.pictureId}" 
            alt="${restaurant.name}">
        <span class="card__rating"><i class="fa-solid fa-star"></i> ${restaurant.rating}</span>
        <section class="card__content">
            <h2 class="card__content__title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h2>
            <h3 class="card__content__city">${restaurant.city}</h3>
            <p class="card__content__info">${restaurant.description}</p>
        </section>
    </article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
    <img class="restaurant__poster lazyload" src="${CONFIG.BASE_IMAGE_URL_LG + restaurant.pictureId}" alt="${restaurant.name}" />
    <h2 class="restaurant__title">${restaurant.name}</h2>
    <div class="restaurant__info">
        <h3>Level Enak</h3>
        <p class="restaurant__info__rating"><i class="fa-solid fa-star"></i> ${restaurant.rating}</p>
        <h3>Dimana...</h3>
        <p class="restaurant__info__city">${restaurant.city}</p>
        <p class="restaurant__info__address">${restaurant.address}</p>
        <h3>Deskripsi Warteg</h3>
        <p class="restaurant__info__description">${restaurant.description}</p>
        <h3>Jualan Apa Aja?</h3>
        <section class="restaurant__menu">
            <article class="restaurant__menu__list">
                <h4>Makanan</h4>
                <ul>
                    ${restaurant.menus.foods.map((food) => `<li>- ${food.name}</li>`).join('')}
                </ul>
            </article>
            <article class="restaurant__menu__list">
                <h4>Minuman</h4>
                <ul>
                    ${restaurant.menus.drinks.map((drink) => `<li>- ${drink.name}</li>`).join('')}
                </ul>
            </article>
        </section>
    </div>
`;

const createRestaurantDetailReviewTemplate = (costumer) => `
        <div class="card">
            <h4 class="costumer__review__name">${costumer.name}</h4>
            <p class="costumer__review__date">${costumer.date}</p>
            <p class="costumer__review__content">${costumer.review}</p>
        </div>
`;

const createRestaurantDetailAddReviewTemplate = () => `
    <h3>Review Kamu?</h3>
    <form>
        <div class="form_control">
            <label for="formCustomerName" class="form__label">Nama</label>
            <input type="text" name="name" id="formCustomerName" class="form__input" placeholder="Agus">
        </div>
        <div class="form_control">
            <label for="formCustomerReview" class="form__label">Review</label>
            <textarea cols="5" name="review" id="formCustomerReview" class="form__input" placeholder="Enak..."></textarea>
        </div>
        <button type="button" class="form__submit_button">Kirim</button>
    </form>
`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="tambah ke warteg favorit" id="favoriteButton" class="favorite__button">
    <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="hapus dari warteg favorit" id="favoriteButton" class="favorite__button">
    <i class="fa-solid fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantDetailReviewTemplate,
  createRestaurantDetailAddReviewTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};
