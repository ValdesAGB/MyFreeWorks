import React from 'react';

function ConnexionForm({ mapElement }) {
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
