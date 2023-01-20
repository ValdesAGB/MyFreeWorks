import React from 'react';
import { notFoundElement } from '../../data';

function NotFound() {
  return (
    <section className="container-fluid my-2">
      <div className="row">
        <img src={notFoundElement} alt="404 Not Found" className="w-100" />
      </div>
    </section>
  );
}

export default NotFound;
