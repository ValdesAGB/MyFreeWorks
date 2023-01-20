import React from 'react';
import { registrationElement } from '../data';

function RegistrationForm() {
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
