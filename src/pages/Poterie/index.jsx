import React from 'react';
import View from '../../components/View';
import { poterieElement } from '../../data';

function Poterie() {
  return (
    <section className="container my-2">
      <div className="row">
        {poterieElement.map(
          ({ id, name, cover, isSold, price, soldPrice, to }) => (
            <View
              key={id}
              id={id}
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

export default Poterie;
