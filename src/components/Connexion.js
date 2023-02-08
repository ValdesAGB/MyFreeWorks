import React from 'react';
import { connexionElement } from '../data';
import ConnexionDropdown from './ConnexionDropdown';
import ConnexionModal from './ConnexionModal';

function Connexion() {
  let titleName = 'Connexion';
  return (
    <React.Fragment>
      <ConnexionDropdown
        mapValeur={connexionElement[0].dropdownElement}
        titleName={titleName}
      />

      <ConnexionModal
        mapValeur={connexionElement[1].modalElement}
        titleName={titleName}
      />
    </React.Fragment>
  );
}

export default Connexion;
