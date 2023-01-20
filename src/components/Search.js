import React from 'react';

function Search() {
  return (
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
  );
}

export default Search;
