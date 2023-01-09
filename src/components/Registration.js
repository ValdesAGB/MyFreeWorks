import React from 'react';
import { registrationElement } from '../data';

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
              {/* Form */}
              <form>
                {registrationElement.map(
                  ({
                    id,
                    title,
                    name,
                    inputType,
                    labelClass,
                    inputClass,
                    divClass,
                  }) => (
                    <div className={divClass} key={id}>
                      <label htmlFor={id} className={labelClass} key={id}>
                        {title}
                      </label>
                      {name && inputType && (
                        <input
                          type={inputType}
                          name={name}
                          className={inputClass}
                          id={id}
                          aria-describedby="emailHelp"
                        />
                      )}
                      {inputType !== 'radio' && inputType !== '' && (
                        <input
                          type={inputType}
                          className={inputClass}
                          id={id}
                          aria-describedby="emailHelp"
                        />
                      )}
                      {inputType === '' && null}
                    </div>
                  )
                )}
                <button type="submit" className="btn btn-primary">
                  S'inscrire
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
