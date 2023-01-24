import React from 'react';

function Icone({ data }) {
  function show() {
    data.setAttribute('type', 'text');
    setTimeout(() => {
      data.setAttribute('type', 'password');
    }, 3000);
  }
  return (
    <React.Fragment>
      <i className="bi bi-eye" title="Afficher" onClick={() => show()}></i>
    </React.Fragment>
  );
}

export default Icone;
