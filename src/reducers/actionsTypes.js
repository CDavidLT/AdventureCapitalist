export const SELL_PRODUCT = 'SELL_PRODUCT';
export const UPGRADE_PRODUCT = 'UPGRADE_PRODUCT';

export const sellProduct = (money) => ({
  type: SELL_PRODUCT,
  money
});

export const upgradeProduct = (money) => ({
  type: UPGRADE_PRODUCT,
  money
});
