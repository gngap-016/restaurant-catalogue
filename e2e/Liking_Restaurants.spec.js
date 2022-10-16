const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#warteg_list');
  I.see('Tidak ada warteg untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('Liking and Unliking one restaurant', async ({ I }) => {
    I.see('Tidak ada warteg untuk ditampilkan', '.restaurant-item__not__found');

    I.amOnPage('/');

    I.waitForElement('.card__content__title a', 20);
    I.seeElement('.card__content__title a');

    const firstRestaurant = locate('.card__content__title a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.waitForElement('#favoriteButton', 1);

    I.seeElement('#favoriteButton');
    I.click('#favoriteButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.card');
    const likedRestaurantTitle = await I.grabTextFrom('.card__content__title');

    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

    I.seeElement('.card__content__title a');
    I.click(firstRestaurant);

    const unlikedRestaurantTitle = await I.grabTextFrom('.restaurant__title');
    I.waitForElement('#favoriteButton', 1);
    I.seeElement('#favoriteButton');
    I.click('#favoriteButton');

    assert.strictEqual(firstRestaurantTitle, unlikedRestaurantTitle);
});
