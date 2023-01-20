import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { police } from '../untils';

function ViewHome({ to, isSold, soldPrice, price, cover, name, PriceSpan }) {
  return (
    <Link to={to} className="text-black text-decoration-none" title="View more">
      <div className="m-3">
        {isSold && soldPrice !== 0 ? (
          <PriceSpan className="fw-light mt-2 text-center">
            <div className="fs-5">{soldPrice} $</div>
            <span
              style={{
                fontSize: '0.8em',
                textDecorationLine: 'line-through',
              }}
            >
              {price} $
            </span>
          </PriceSpan>
        ) : (
          <PriceSpan className="fw-light mt-2">{price} $</PriceSpan>
        )}
        <img
          src={cover}
          alt={`${name} - cover`}
          className="w-100 rounded"
          style={{ width: '250px', height: '250px' }}
        />
        <span
          className="mt-2"
          style={{
            fontFamily: police.ff1,
          }}
        >
          {name}
        </span>
      </div>
    </Link>
  );
}

ViewHome.propTypes = {
  cover: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isSold: PropTypes.bool,
  price: PropTypes.number.isRequired,
  soldPrice: PropTypes.number,
  to: PropTypes.string.isRequired,
  PriceSpan: PropTypes.object.isRequired,
};

ViewHome.defaultProps = {
  soldPrice: 0,
  isSold: false,
  name: '',
  to: '/',
};
export default ViewHome;
