import React from 'react';
import { connexionElement } from '../data';
import ConnexionModal from './ConnexionModal';

function Connexion() {
  let titleName = 'Connexion';
  return (
    <React.Fragment>
      <ConnexionModal
        mapValeur={connexionElement[1].modalElement}
        titleName={titleName}
      />
    </React.Fragment>
  );
}

export default Connexion;
