import React from 'react';
import { colors } from '../untils';
import ConnexionForm from './ConnexionForm';

function ConnexionModal({ titleName, mapValeur }) {
  return (
    <div className="col-lg-7 col-6 d-md-none">
      <button
        style={{
          backgroundColor: colors.headerBackground,
          border: colors.headerBackground,
        }}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#connexionModal"
      >
        {titleName}
      </button>
      <div
        className="modal fade text-black"
        id="connexionModal"
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
              <ConnexionForm mapElement={mapValeur} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnexionModal;
