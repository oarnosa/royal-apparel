import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { ShopPageContainer } from './shop.styles';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import {
  selectIsCollectionsFetching,
  selectIsCollectionsLoaded
} from '../../redux/shop/shop.selectors';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isFetchingCollections, isCollectionsLoaded } = this.props;

    return (
      <ShopPageContainer>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner
              isLoading={isFetchingCollections}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </ShopPageContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetchingCollections: selectIsCollectionsFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDistpatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  mapStateToProps,
  mapDistpatchToProps
)(ShopPage);
