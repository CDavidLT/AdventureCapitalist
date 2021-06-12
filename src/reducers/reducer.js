import { SELL_PRODUCT, UPGRADE_PRODUCT } from './actionsTypes';

const initialState = {
  product: [{
    name: 'Iphone 12',
    price: 100,
    level: 1,
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000'
  }, {
    name: 'Samsung Galaxy s21',
    price: 500,
    level: 1,
    image: 'https://images.samsung.com/is/image/samsung/p6pim/fr/galaxy-s21/gallery/fr-galaxy-s21-5g-g991-sm-g991bzvgeuh-368998809?$720_576_PNG$'
  }, {
    name: 'Huawei P20',
    price: 1000,
    level: 1,
    image: 'https://images.frandroid.com/wp-content/uploads/2019/04/huawei-p20.png'
  }],
  money: 0

};

const sellProduct = (state, action) => ({
  money: state.money + action.money,
  product: state.product
});

const upgradeProduct = (state, action) => ({
  money: state.money - action.money,
  product: state.product
});

const optionProduct = (state = initialState, action) => {
  switch (action.type) {
    case SELL_PRODUCT:
      return sellProduct(state, action);
    case UPGRADE_PRODUCT:
      return upgradeProduct(state, action);
    default:
      return state;
  }
};

export default optionProduct;
