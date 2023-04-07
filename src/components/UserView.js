import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  LoadingContext,
  MessageContext,
  ProductContext,
} from '../untils/context'
import { apiLink } from '../data'
import { Loader } from '../untils/Loader'
import Feedback from './Feedback'

function UserView() {
  const { id } = useParams()
  const { product, toggleProduct } = useContext(ProductContext)
  const { isDataLoading, toggleIsDataLoading } = useContext(LoadingContext)
  const {
    message,
    errorMes,
    codeErr,
    toggleMessage,
    toggleErrorMes,
    toggleCodeErr,
  } = useContext(MessageContext)

  useEffect(() => {
    toggleMessage(null)
    toggleErrorMes(null)
    toggleCodeErr(null)
  }, [])

  const fetchElements = {
    Url: `${apiLink}/api/product/${id}`,
    GetOptions: {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        /*  Authorization: `Bearer ${
          userLogin !== null ? userLogin.token : 'Error'
        }`,*/
      },
    },
    DeleteOptions: {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        /*  Authorization: `Bearer ${
          userLogin !== null ? userLogin.token : 'Error'
        }`,*/
      },
    },
  }

  useEffect(() => {
    toggleProduct(null)
    toggleIsDataLoading(true)
    fetch(fetchElements.Url, fetchElements.GetOptions)
      .then((promise) => {
        if (!promise.ok) {
          throw promise
        } else {
          return promise.json()
        }
      })
      .then((product) => {
        toggleProduct(product)
        toggleIsDataLoading(false)
      })
      .catch((error) => {
        error.json().then((errorMessage) => {
          toggleErrorMes(errorMessage.error)
          toggleCodeErr(error.status)
          toggleIsDataLoading(false)
        })
      })
  }, [])

  const check = (product, keyIndex) => {
    if (product) {
      const firstKey = Object.keys(product)[keyIndex]
      if (firstKey) {
        return product[firstKey]
      }
    }
    return 'Error'
  }

  const button = () => {
    return (
      <span className="my-5">
        {/*Ici nous reviendrons mettre à jour le bouton afin que id soit le id du user. */}
        <Link to="/dashboard/id">Retour au tableau de bord</Link>
      </span>
    )
  }

  const supprimed = () => {
    toggleMessage(null)
    toggleErrorMes(null)
    toggleCodeErr(null)
    toggleIsDataLoading(true)
    fetch(fetchElements.Url, fetchElements.DeleteOptions)
      .then((promise) => {
        if (!promise.ok) {
          throw promise
        } else {
          return promise.json()
        }
      })
      .then((mes) => {
        toggleMessage(mes)
        toggleIsDataLoading(false)
      })
      .catch((error) => {
        error.json().then((errorMessage) => {
          toggleErrorMes(errorMessage.error)
          toggleCodeErr(error.status)
          toggleIsDataLoading(false)
        })
      })
  }

  return (
    <React.Fragment>
      {isDataLoading ? (
        <Loader />
      ) : message || errorMes ? (
        <Feedback button={button()} />
      ) : (
        <>
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
              <img
                src={check(product, 3)}
                alt={`${check(product, 2)} - cover`}
              />
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
              <Link
                to={`/update/product/${check(product, 0)}`}
                className="col-2"
              >
                <button className="btn btn-primary  ">Modifier</button>
              </Link>

              <button
                className="btn btn-danger  col-2"
                onClick={() => supprimed()}
              >
                Supprimer
              </button>
            </div>
          </div>

          <div className="container my-2 d-block d-md-none">
            <div className="col">Produit: {check(product, 1)}</div>
            <div className="row my-4">
              <img
                src={check(product, 3)}
                alt={`${check(product, 2)} - cover`}
              />
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
        </>
      )}
    </React.Fragment>
  )
}

export default UserView
