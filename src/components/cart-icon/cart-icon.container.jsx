import React from 'react';
import { graphql } from 'react-apollo';
import { flowRight } from 'lodash';

import { TOGGLE_CART_HIDDEN, GET_ITEM_COUNT } from '../../graphql/actions';

import CartIcon from './cart-icon.component';

const CartIconContainer = ({ data: { itemCount }, toggleCartHidden }) => (
  <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />
);

export default flowRight(
  graphql(TOGGLE_CART_HIDDEN, { name: 'toggleCartHidden' }),
  graphql(GET_ITEM_COUNT)
)(CartIconContainer);
