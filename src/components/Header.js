import React from 'react';
import { Link } from 'react-router-dom';
import Connexion from './Connexion';
import Registration from './Registration';

function Header() {
  return (
    <section>
      <div
        style={{
          backgroundColor: '#660766',
          fontFamily:
            "'Sitka Subheading', calibri,Times, 'Times New Roman', Georgia, serif",
        }}
        className="row align-items-center p-1 text-white"
      >
        <div className="col-7 col-lg-4">
          <h1>
            <Link to="/" className="text-white text-decoration-none">
              MyFreeWorks
            </Link>
          </h1>
        </div>

        <div className="col-5 col-lg-8 row">
          <div className="col-lg-6 col-0 row  d-none d-lg-flex align-items-center ">
            <input
              type="search"
              placeholder="Entrez le mot-clé"
              className="form-control col"
              disabled
            />
            <input
              type="submit"
              value="Rechercher"
              className="col-4 btn btn-secondary"
              disabled
            />
          </div>

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
        </div>
      </div>
    </section>
  );
}

export default Header;
