import React from 'react';
import { Mutation, Query } from 'react-apollo';

import { SET_CURRENT_USER, GET_CURRENT_USER } from '../graphql/actions';

import App from './App';

const AppContainer = () => (
  <Query query={GET_CURRENT_USER}>
    {({ data: { currentUser } }) => (
      <Mutation mutation={SET_CURRENT_USER}>
        {setCurrentUser => (
          <App
            currentUser={currentUser}
            setCurrentUser={user => {
              setCurrentUser({ variables: { user } });
            }}
          />
        )}
      </Mutation>
    )}
  </Query>
);

export default AppContainer;
