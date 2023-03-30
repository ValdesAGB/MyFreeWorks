import React, { useContext } from 'react';
import { CheckPasswordContext } from '../untils/context';

function Icone({ id }) {
  const { toggleIconeState } = useContext(CheckPasswordContext);
  return (
    <React.Fragment>
      <div className="form-check my-3">
        <input
          className="form-check-input"
          type="checkbox"
          id={id}
          onClick={(e) => toggleIconeState(e.target.checked)}
        />
        <label className="form-check-label" htmlFor={id}>
          Afficher le mot de passe
        </label>
      </div>
    </React.Fragment>
  );
}

export default Icone;
