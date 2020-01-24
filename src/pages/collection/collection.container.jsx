import React from 'react';
import { Query } from 'react-apollo';
import { GET_COLLECTION_BY_TITLE } from '../../graphql/actions';

import CollectionPage from './collection.component';
import Spinner from '../../components/spinner/spinner.component';

const CollectionPageContainer = ({ match }) => (
  <Query
    query={GET_COLLECTION_BY_TITLE}
    variables={{ title: match.params.collectionId }}
  >
    {({ loading, data }) => {
      if (loading) return <Spinner />;
      const { getCollectionsByTitle } = data;
      return <CollectionPage collection={getCollectionsByTitle} />;
    }}
  </Query>
);

export default CollectionPageContainer;
