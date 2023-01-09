import React from 'react';
import { menuElement } from '../data';
import { colors } from '../untils';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <section>
      <div
        className="row fw-bold navbar navbar-expand-lg"
        style={{ backgroundColor: colors.menuBackgroung }}
      >
        <button
          className="navbar-toggler row p-0 m-0"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list text-white fs-1"></i>
        </button>

        <span className="collapse navbar-collapse" id="navbarSupportedContent">
          <hr className="text-white" />
          <ul className=" list-unstyle col-12 row pt-0 pt-md-2  text-white">
            {menuElement.map(({ id, name, icone, to }) => (
              <li
                className="list-inline-item col my-2 my-md-0 text-center"
                key={id}
              >
                <Link to={to} className="text-white text-decoration-none">
                  {icone ? <i className={icone}></i> : name}
                </Link>
              </li>
            ))}
          </ul>
        </span>
      </div>
    </section>
  );
}

export default Menu;
