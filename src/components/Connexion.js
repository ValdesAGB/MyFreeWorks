import React from 'react';
import { connexionElement } from '../data';

function Connexion() {
  return (
    <React.Fragment>
      <div className="dropdown col-lg-7 col-6 d-none d-md-block">
        <button
          style={{
            backgroundColor: '#660766',
            border: '#660766',
          }}
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Connexion
        </button>
        <div className="dropdown-menu">
          <form>
            {connexionElement[0].dropdownElement.map(
              ({ id, title, labelClass, inputClass, inputType, divClass }) => (
                <div className={divClass} key={id}>
                  <label htmlFor={id} className={labelClass}>
                    {title}
                  </label>
                  <input
                    type={inputType}
                    className={inputClass}
                    id={id}
                    aria-describedby="emailHelp"
                  />
                </div>
              )
            )}

            <button type="submit " className="btn btn-primary m-3">
              Se connecter
            </button>
          </form>
        </div>
      </div>

      <div className="col-lg-7 col-6 d-md-none">
        <button
          style={{
            backgroundColor: '#660766',
            border: '#660766',
          }}
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#connexionModal"
        >
          Connexion
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
                  Connexion
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
                  {connexionElement[1].modalElement.map(
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
                        <label htmlFor={id} className={labelClass}>
                          {title}
                        </label>
                        <input
                          type={inputType}
                          className={inputClass}
                          id={id}
                          aria-describedby="emailHelp"
                        />
                      </div>
                    )
                  )}
                  <button type="submit " className="btn btn-primary m-3">
                    Se connecter
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Connexion;
