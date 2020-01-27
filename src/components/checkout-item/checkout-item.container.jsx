import React from 'react';
import { graphql } from 'react-apollo';
import { flowRight } from 'lodash';

import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_ITEM_FROM_CART
} from '../../graphql/actions';

import CheckoutItem from './checkout-item.component';

const CollectionItemContainer = ({
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  ...otherProps
}) => (
  <CheckoutItem
    {...otherProps}
    addItem={item => addItemToCart({ variables: { item } })}
    removeItem={item => removeItemFromCart({ variables: { item } })}
    clearItem={item => clearItemFromCart({ variables: { item } })}
  />
);

export default flowRight(
  graphql(ADD_ITEM_TO_CART, { name: 'addItemToCart' }),
  graphql(REMOVE_ITEM_FROM_CART, { name: 'removeItemFromCart' }),
  graphql(CLEAR_ITEM_FROM_CART, { name: 'clearItemFromCart' })
)(CollectionItemContainer);
