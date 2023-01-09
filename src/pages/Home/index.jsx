import React from 'react';
import View from '../../components/View';
import { homeElement } from '../../data';

function Home() {
  return (
    <section className="container my-2">
      <div className="row">
        {homeElement.map(
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

export default Home;
