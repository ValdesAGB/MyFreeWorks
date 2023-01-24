import React from 'react';
import Icone from './Icone';

function ConnexionForm({ mapElement }) {
  let passwordConnexionDrop = document.getElementById('passwordConnexionDrop');
  let passwordConnexionModal = document.getElementById(
    'passwordConnexionModal'
  );
  return (
    <form>
      {mapElement.map(
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
            {id === 'passwordConnexionDrop' && (
              <Icone data={passwordConnexionDrop} />
            )}

            {id === 'passwordConnexionModal' && (
              <Icone data={passwordConnexionModal} />
            )}
          </div>
        )
      )}

      <button type="submit " className="btn btn-primary m-3">
        Se connecter
      </button>
    </form>
  );
}

export default ConnexionForm;
