import React from 'react';
import { registrationElement } from '../data';
import Icone from './Icone';

function RegistrationForm() {
  let passwordRegistration = document.getElementById('passwordRegistration');
  let checkPasswordRegistration = document.getElementById(
    'checkPasswordRegistration'
  );

  return (
    <form>
      {registrationElement.map(
        ({ id, title, name, inputType, labelClass, inputClass, divClass }) => (
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
            {id === 'passwordRegistration' && (
              <Icone data={passwordRegistration} />
            )}
            {id === 'checkPasswordRegistration' && (
              <Icone data={checkPasswordRegistration} />
            )}
          </div>
        )
      )}
      <button type="submit" className="btn btn-primary">
        S'inscrire
      </button>
    </form>
  );
}

export default RegistrationForm;
