import React from 'react';
import { Query } from 'react-apollo';
import { GET_COLLECTIONS } from '../../graphql/actions';

import CollectionsOverview from './collections-overview.component';
import Spinner from '../spinner/spinner.component';

const CollectionsOverviewContainer = () => (
  <Query query={GET_COLLECTIONS}>
    {({ loading, data }) => {
      if (loading) return <Spinner />;
      return <CollectionsOverview collections={data.collections} />;
    }}
  </Query>
);

export default CollectionsOverviewContainer;
