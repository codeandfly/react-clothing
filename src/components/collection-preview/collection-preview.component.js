import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './collection-preview.styles';

const CollectionPreview = ({ title, items, match, routeName }) => {
  return (
    <CollectionPreviewContainer>
      <Link to={`${match.url}/${routeName}`}>
        <TitleContainer>{title.toUpperCase()} &#8227;</TitleContainer>
      </Link>
      <PreviewContainer>
        {items
          .filter((item, i) => i < 4)
          .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  )
}

export default withRouter(CollectionPreview);
