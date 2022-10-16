import RestaurantSource from '../data/restaurant-source';

const ButtonAddReview = {
  async init({ id }) {
    this._id = id;

    await this._addReview(this._id);
  },

  async _addReview(restaurantId) {
    const formCustomerName = document.querySelector('#formCustomerName');
    const formCustomerReview = document.querySelector('#formCustomerReview');

    if (formCustomerName.value === '' || formCustomerReview.value === '') {
      alert('Kolom Review tidak boleh ada yang kosong!');
    } else {
      const data = {
        id: restaurantId,
        name: formCustomerName.value,
        review: formCustomerReview.value,
      };

      await RestaurantSource.addCustomerReview(data);
      formCustomerName.value = '';
      formCustomerReview.value = '';
    }
  },
};

export default ButtonAddReview;
