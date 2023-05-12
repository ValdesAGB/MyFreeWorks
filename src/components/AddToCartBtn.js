import React, { useContext } from 'react'
import { addToCart } from '../data'
import { CartContext } from '../untils/context'

function AddToCartBtn({ nameBtn, name, price }) {
  const { cart, setCart } = useContext(CartContext)
  return (
    <React.Fragment>
      {nameBtn ? (
        <button
          className="btn btn-primary"
          onClick={() => addToCart(name, price, cart, setCart)}
        >
          {nameBtn}
        </button>
      ) : (
        <span className="text-end col">
          <i
            className="bi bi-cart-plus btn text-primary fw-bold fs-4"
            onClick={() => addToCart(name, price, cart, setCart)}
          ></i>
        </span>
      )}
    </React.Fragment>
  )
}

export default AddToCartBtn
