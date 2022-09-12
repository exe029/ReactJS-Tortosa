import React from 'react';
import Item from './Item';

import PacmanLoader from 'react-spinners/PacmanLoader';

const ItemList = ({ products }) => {
  return (
    <div className="grid grid-cols-2 gap-12 sm:grid-cols-4 p-4">
      {products.length > 0 ? (
        products.map((product) => <Item key={product.id} product={product} />)
      ) : (
        <PacmanLoader color="#b723c1" />
      )}
    </div>
  );
};

export default ItemList;