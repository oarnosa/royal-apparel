import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const SelectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);
