import React from 'react';

function Icone({ data }) {
  function show() {
    if (data !== null) {
      data.setAttribute('type', 'text');
      setTimeout(() => {
        data.setAttribute('type', 'password');
      }, 3000);
    } else {
      console.log('error');
    }
  }
  return (
    <React.Fragment>
      <i
        className="bi bi-eye-fill btn"
        title="Afficher"
        onClick={() => show()}
      ></i>
    </React.Fragment>
  );
}

export default Icone;
