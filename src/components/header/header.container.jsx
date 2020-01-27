import React from 'react';
import { Query } from 'react-apollo';

import { GET_CLIENT_PROPERTIES } from '../../graphql/actions';

import Header from './header.component';

const HeaderContainer = () => (
  <Query query={GET_CLIENT_PROPERTIES}>
    {({ data: { cartHidden, currentUser } }) => (
      <Header hidden={cartHidden} currentUser={currentUser} />
    )}
  </Query>
);

export default HeaderContainer;
