import React from 'react';
import Connexion from './Connexion';
import Registration from './Registration';

function Identification() {
  return (
    <div className="col-lg-5 col row offset-1 navbar navbar-expand-md">
      <i
        className="navbar-toggler  bi bi-person-fill text-white fs-3 align-items-center text-center border border-0"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></i>

      <span className="collapse navbar-collapse" id="navbar">
        <Connexion />
        <Registration />
      </span>
    </div>
  );
}

export default Identification;
