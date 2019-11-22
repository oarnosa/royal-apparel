import React from "react";
import CollectionPreview from "../collection-preview/collection-preview.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import { CollectionOverviewContianer } from "./collections-overview.styles";

const CollectionsOverview = ({ collections }) => (
  <CollectionOverviewContianer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionOverviewContianer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
