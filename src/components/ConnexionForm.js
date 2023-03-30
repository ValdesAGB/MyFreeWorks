import React, { useContext } from 'react';
import { AuthContext, CheckPasswordContext } from '../untils/context';
import Icone from './Icone';

function ConnexionForm({ mapElement }) {
  const { iconeState } = useContext(CheckPasswordContext);
  const { setLogMail, setLogPaswword, login } = useContext(AuthContext);

  return (
    <form>
      {mapElement.map(
        ({ id, title, labelClass, inputClass, inputType, divClass }) => (
          <div className={divClass} key={id}>
            <label htmlFor={id} className={labelClass}>
              {title}
            </label>
            <input
              type={
                id === 'passwordConnexionModal' && iconeState === true
                  ? 'text'
                  : inputType
              }
              className={inputClass}
              id={id}
              aria-describedby="emailHelp"
              onChange={(e) => {
                id === 'passwordConnexionModal'
                  ? setLogPaswword(e.target.value)
                  : setLogMail(e.target.value);
              }}
            />
          </div>
        )
      )}
      <Icone id="connexion" />

      <button
        type="submit "
        className="btn btn-primary m-3"
        onClick={(e) => {
          e.preventDefault();
          console.log(login);
        }}
      >
        Se connecter
      </button>
    </form>
  );
}

export default ConnexionForm;
