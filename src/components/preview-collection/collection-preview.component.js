import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, match, routeName }) => {
  return (
    <div className="collection-preview">
      <Link to={`${match.url}/${routeName}`}>
        <h1 className="title">{title.toUpperCase()} &#8227;</h1>
      </Link>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default withRouter(CollectionPreview);
