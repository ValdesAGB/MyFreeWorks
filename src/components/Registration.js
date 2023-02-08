import React from 'react';
import { registrationElement } from '../data';
import { colors } from '../untils';
import RegistrationForm from './RegistrationForm';

function Registration() {
  let titleName = 'Inscription';
  return (
    <div className="col-lg-5 col">
      <button
        style={{
          backgroundColor: colors.headerBackground,
          border: colors.headerBackground,
        }}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        {titleName}
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
                {titleName}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <RegistrationForm mapElement={registrationElement} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
