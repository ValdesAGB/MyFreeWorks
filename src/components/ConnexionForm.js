import React, { useState } from 'react';
import Icone from './Icone';

function ConnexionForm({ mapElement }) {
  let passwordConnexionDrop = document.getElementById('passwordConnexionDrop');
  let passwordConnexionModal = document.getElementById(
    'passwordConnexionModal'
  );

  const [passwordConnexion, setPasswordConnexion] = useState('');
  function pass(e, id) {
    if (
      e.target.value !== '' &&
      (id === 'passwordConnexionDrop' || id === 'passwordConnexionModal')
    ) {
      setPasswordConnexion(e.target.value);
      {
        /*Ne pas oublié d'enlever le console.log(passwordConnexion) et la partie else */
      }
      console.log(passwordConnexion);
    } else {
      console.log('error');
    }
  }

  function checkEnter(value) {
    if (value.includes('@')) {
      setPasswordConnexion(value);
      console.log(passwordConnexion);
    } else {
      alert('pas de @');
    }
  }

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
              onChange={(e) => pass(e, id)}
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
