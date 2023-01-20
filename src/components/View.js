import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ViewHome from './ViewHome';
import { colors } from '../untils';
import ViewOthers from './ViewOthers';

function View({ cover, name, isSold, price, soldPrice, to }) {
  const PriceSpan = styled.span`
    position: absolute;
    background-color: ${colors.headerBackground};
    color: white;
    padding: 5px;
  `;

  const pathActuel = window.location.pathname;

  return (
    <div className="col-12 col-sm-6 col-lg-3">
      {pathActuel !== '/' ? (
        <ViewOthers
          cover={cover}
          name={name}
          isSold={isSold}
          price={price}
          soldPrice={soldPrice}
          PriceSpan={PriceSpan}
        />
      ) : (
        <ViewHome
          cover={cover}
          name={name}
          isSold={isSold}
          price={price}
          soldPrice={soldPrice}
          to={to}
          PriceSpan={PriceSpan}
        />
      )}
    </div>
  );
}

View.propTypes = {
  cover: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isSold: PropTypes.bool,
  price: PropTypes.number.isRequired,
  soldPrice: PropTypes.number,
  to: PropTypes.string.isRequired,
};

View.defaultProps = {
  soldPrice: 0,
  isSold: false,
  name: '',
  to: '/',
};

export default View;
