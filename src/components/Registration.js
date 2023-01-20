import React from 'react';
import RegistrationForm from './RegistrationForm';

function Registration() {
  return (
    <div className="col-lg-5 col">
      <button
        style={{
          backgroundColor: '#660766',
          border: '#660766',
        }}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Inscription
      </button>

      <div
        className="modal fade text-black"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Inscription
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
