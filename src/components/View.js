import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';

function View({ cover, name, isSold, price, soldPrice, to }) {
  const PriceSpan = styled.span`
    position: absolute;
    background-color: #660766;
    color: white;
    padding: 5px;
  `;

  const pathActuel = window.location.pathname;

  return (
    <div className="col-12 col-sm-6 col-lg-3">
      {pathActuel !== '/MyFreeWorks' ? (
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
              fontFamily:
                "'Sitka Subheading', calibri,Times, 'Times New Roman', Georgia, serif",
            }}
          >
            {name}
          </span>
          <Button name={name} price={price} soldPrice={soldPrice} />
        </div>
      ) : (
        <Link
          to={to}
          className="text-black text-decoration-none"
          title="voir plus"
        >
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
                fontFamily:
                  "'Sitka Subheading', calibri,Times, 'Times New Roman', Georgia, serif",
              }}
            >
              {name}
            </span>
          </div>
        </Link>
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
