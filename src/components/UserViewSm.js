import React from 'react'
import { Link } from 'react-router-dom'
import { check } from '../data'

function UserViewSm({ product, supprimed }) {
  return (
    <React.Fragment>
      <div className="container my-2 d-block d-md-none">
        <div className="col">Produit: {check(product, 1)}</div>
        <div className="row my-4">
          <img src={check(product, 3)} alt={`${check(product, 2)} - cover`} />
        </div>
        <span>
          Description :
          <div className="border p-2 my-2">{check(product, 2)}</div>
        </span>

        <div className="row my-3 ">
          <span className="col ">
            En solde ? : {product && product.isSold ? 'Oui' : 'Non'}
          </span>
          <span className=" col ">Solde Prix : {check(product, 6)} €</span>
        </div>
        <div className="my-4">Prix normal : {check(product, 4)} €</div>
        <div className="">Catégorie : {check(product, 7)}</div>

        <div className=" my-4">
          <div className="my-3">
            Ajouter le :{' '}
            {product && product.createdAt
              ? product.createdAt.split('T')[0]
              : 'Créer'}
          </div>
          <div className="my-3">
            Dernière modification :{' '}
            {product && product.updatedAt
              ? product.updatedAt.split('T')[0]
              : 'MàJ'}
          </div>
        </div>

        <div className="my-5 text-center">
          <Link to={`/update/product/${check(product, 0)}`}>
            <button className="btn btn-primary  ">Modifier</button>
          </Link>

          <button
            className="btn btn-danger col mx-2 "
            onClick={() => supprimed()}
          >
            Supprimer
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UserViewSm
