import React from 'react'
import { Link } from 'react-router-dom'
import { check } from '../data'

function UserViewMd({ product, supprimed }) {
  return (
    <React.Fragment>
      <div className="container my-2 d-none d-md-block">
        <div className="row my-3 ">
          <span className="col">Produit: {check(product, 1)}</span>
          <span className="col">
            En solde ? : {product && product.isSold ? 'Oui' : 'Non'}
          </span>
          <span className=" col">Solde Prix : {check(product, 6)} €</span>

          <span className="col">Prix normal : {check(product, 4)} €</span>
        </div>
        <div className="row my-2">
          <img src={check(product, 3)} alt={`${check(product, 2)} - cover`} />
        </div>
        <span>
          Description :
          <div className="border p-2 my-2">{check(product, 2)}</div>
        </span>

        <div className="my-3">Catégorie : {check(product, 7)}</div>
        <div className="row my-4">
          <div className="col">
            Ajouter le :{' '}
            {product && product.createdAt
              ? product.createdAt.split('T')[0]
              : 'Créer'}
          </div>
          <div className="col">
            Dernière modification :{' '}
            {product && product.updatedAt
              ? product.updatedAt.split('T')[0]
              : 'MàJ'}
          </div>
        </div>

        <div className="my-5 row justify-content-center">
          <Link to={`/update/product/${check(product, 0)}`} className="col-2">
            <button className="btn btn-primary  ">Modifier</button>
          </Link>

          <button className="btn btn-danger  col-2" onClick={() => supprimed()}>
            Supprimer
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UserViewMd
