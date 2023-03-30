import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../untils/context';

function ViewMore() {
  const { id } = useParams();
  const { product } = useContext(ProductContext);
  return (
    <React.Fragment>
      <div>
        <div>{product.id}</div>
        <div>{product.name}</div>
        <div>{product.price}</div>
        <div>
          <img src={product.cover} alt="" />
        </div>
        <div>{product.isSold}</div>
        <div>{product.soldPrice}</div>
      </div>
    </React.Fragment>
  );
}

export default ViewMore;
