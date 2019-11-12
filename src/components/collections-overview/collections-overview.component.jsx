import React from 'react';
import CollectionPreview from '../collection-preview/collection-preview.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectCollections } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: SelectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
