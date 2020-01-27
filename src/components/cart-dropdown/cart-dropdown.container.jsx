import React from 'react';
import { Query, Mutation } from 'react-apollo';

import { TOGGLE_CART_HIDDEN, GET_CART_ITEMS } from '../../graphql/actions';

import CartDropdown from './cart-dropdown.component';

const CartDropdownContainer = () => (
  <Mutation mutation={TOGGLE_CART_HIDDEN}>
    {toggleCartHidden => (
      <Query query={GET_CART_ITEMS}>
        {({ data: { cartItems } }) => (
          <CartDropdown
            cartItems={cartItems}
            toggleCartHidden={toggleCartHidden}
          />
        )}
      </Query>
    )}
  </Mutation>
);

export default CartDropdownContainer;
