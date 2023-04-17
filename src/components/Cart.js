import React, { useContext, useEffect } from 'react'
import { CartContext } from '../untils/context'
import { withdrawCart } from '../data'

function Cart() {
  const { cart, setCart } = useContext(CartContext)
  useEffect(() => {
    localStorage.setItem('myfreeworksShop', JSON.stringify(cart))
  }, [cart])

  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  )
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn text-white col"
        data-bs-toggle="modal"
        data-bs-target="#cart"
      >
        Panier
      </button>

      <div
        className="modal fade text-dark"
        id="cart"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Votre panier
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {cart.length > 0 ? (
                <div className="modal-body text-black">
                  {cart.map(({ name, price, amount }, index) => (
                    <div key={`${name}-${index}`} className="row">
                      <div className="col-10">
                        {name} : {price} $ x {amount}
                      </div>
                      <div className=" col-2">
                        <i
                          className="bi bi-x-lg btn text-danger"
                          onClick={() =>
                            withdrawCart(cart, setCart, name, price)
                          }
                        ></i>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="modal-body text-black">
                  Votre panier est vide
                </div>
              )}
            </div>
            <div className="row  justify-content-center mx-1">
              <div className="modal-footer  ">
                {cart.length > 0 && (
                  <i
                    className="bi bi-bag-check fs-4 col-2 btn btn-success"
                    onClick={() =>
                      alert(
                        'Un peu de patience cette fonctionnalité sera mise à jour bientôt.'
                      )
                    }
                  ></i>
                )}
                <h5 className="col">Total : {total} $</h5>
                <button
                  type="button"
                  className="btn btn-secondary col"
                  data-bs-dismiss="modal"
                  onClick={() => setCart([])}
                >
                  Vider le panier
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Cart
