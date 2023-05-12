import React from 'react';
import { colors } from '../untils';
import ConnexionForm from './ConnexionForm';

function ConnexionDropdown({ titleName, mapValeur }) {
  return (
    <div className="dropdown col-lg-7 col-6 d-none d-md-block">
      <button
        style={{
          backgroundColor: colors.headerBackground,
          border: colors.headerBackground,
        }}
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {titleName}
      </button>
      <div className="dropdown-menu">
        <ConnexionForm mapElement={mapValeur} />
      </div>
    </div>
  );
}

export default ConnexionDropdown;
