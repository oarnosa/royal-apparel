import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { TOGGLE_CART_HIDDEN, GET_ITEM_COUNT } from '../../graphql/actions';

import CartIcon from './cart-icon.component';

const CartIconContainer = () => (
  <Query query={GET_ITEM_COUNT}>
    {({ data: { itemCount } }) => (
      <Mutation mutation={TOGGLE_CART_HIDDEN}>
        {toggleCartHidden => (
          <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />
        )}
      </Mutation>
    )}
  </Query>
);

export default CartIconContainer;
