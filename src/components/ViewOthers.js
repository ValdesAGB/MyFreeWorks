import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'
import { police } from '../untils'
import { Link } from 'react-router-dom'

function ViewOthers({ id, isSold, soldPrice, price, cover, name, PriceSpan }) {
  return (
    <div className="m-3">
      <Link to={`/viewmore/${id}`} className="text-dark text-decoration-none">
        <>
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
        </>
      </Link>
      <Button name={name} price={soldPrice ? soldPrice : price} />
    </div>
  )
}

ViewOthers.propTypes = {
  cover: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isSold: PropTypes.bool,
  price: PropTypes.number.isRequired,
  soldPrice: PropTypes.number,
  PriceSpan: PropTypes.object.isRequired,
}

ViewOthers.defaultProps = {
  soldPrice: 0,
  isSold: false,
  name: '',
}
export default ViewOthers
