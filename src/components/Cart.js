import React from 'react'

function Cart() {
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
              Cette fonctionnnalité n'est pas encore entièrement mise en ligne.
              Vous serez informer dès que cela sera.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Vider le panier
              </button>
              {/*<button type="button" className="btn btn-primary">
                Save changes
              </button>*/}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Cart
