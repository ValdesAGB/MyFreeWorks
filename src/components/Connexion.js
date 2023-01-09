import React from 'react';
import { connexionElement } from '../data';

function Connexion() {
  return (
    <div className="dropdown col-lg-7 col-6">
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
          {connexionElement.map(
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
  );
}

export default Connexion;
