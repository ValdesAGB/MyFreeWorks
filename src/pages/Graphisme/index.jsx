import React from 'react';
import View from '../../components/View';
import { graphismeElement } from '../../data';

function Graphisme() {
  return (
    <section className="container my-2">
      <div className="row">
        {graphismeElement.map(
          ({ id, name, cover, isSold, price, soldPrice, to }) => (
            <View
              key={id}
              name={name}
              cover={cover}
              isSold={isSold}
              price={price}
              soldPrice={soldPrice}
              to={to}
            />
          )
        )}
      </div>
    </section>
  );
}

export default Graphisme;
