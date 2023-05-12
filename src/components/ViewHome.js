import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { UserContext } from '../untils/context'
import AddToCartBtn from './AddToCartBtn'

function ViewHome({ to, isSold, soldPrice, price, cover, name, PriceSpan }) {
  const { userId } = useContext(UserContext)
  const accountState = userId && userId.stateAccount
  return (
    <React.Fragment>
      <span>
        <Link
          to={to}
          className="text-black text-decoration-none"
          title="Voir d'autres produits de la même catégorie"
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
          </div>
        </Link>

        <span className="row mb-4 align-items-center border border-primary rounded mx-2">
          <span className="col">{name}</span>
          {userId && accountState ? (
            <AddToCartBtn name={name} price={soldPrice ? soldPrice : price} />
          ) : null}
        </span>
      </span>
    </React.Fragment>
  )
}

ViewHome.propTypes = {
  cover: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isSold: PropTypes.bool,
  price: PropTypes.number.isRequired,
  soldPrice: PropTypes.number,
  to: PropTypes.string.isRequired,
  PriceSpan: PropTypes.object.isRequired,
}

ViewHome.defaultProps = {
  soldPrice: 0,
  isSold: false,
  name: '',
  to: '/',
}
export default ViewHome
