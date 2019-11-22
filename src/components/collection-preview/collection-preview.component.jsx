import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import {
  CollectionPreviewContianer,
  PreviewContainer
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContianer>
    <h1>{title.toUpperCase()}</h1>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContianer>
);

export default CollectionPreview;
