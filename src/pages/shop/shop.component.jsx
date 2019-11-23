import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { ShopPageContainer } from "./shop.styles";
import { updateCollections } from "../../redux/shop/shop.actions";

import {
  firestore,
  convertCollectionSnapshotToMap
} from "../../firebase/firebase.utils";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <ShopPageContainer>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </ShopPageContainer>
    );
  }
}

const MapDistpatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, MapDistpatchToProps)(ShopPage);
