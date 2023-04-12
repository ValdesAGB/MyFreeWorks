import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  LoadingContext,
  MessageContext,
  ProductContext,
  UserContext,
} from '../untils/context'
import { apiProductLink } from '../data'
import { Loader } from '../untils/Loader'
import Feedback from './Feedback'

function ViewMore() {
  const { id } = useParams()
  const { userId } = useContext(UserContext)
  const { product, toggleProduct } = useContext(ProductContext)
  const {
    isDataLoading,
    toggleIsDataLoading,
    isSignComplete,
    isLoginComplete,
  } = useContext(LoadingContext)
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
    fetchUrl: `${apiProductLink}/${id}`,
    fetchOptions: {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userId && userId.token}`,
      },
    },
  }
  useEffect(() => {
    toggleProduct(null)
    toggleIsDataLoading(true)

    fetch(fetchElements.fetchUrl, fetchElements.fetchOptions)
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
  }, [userId]) // On ajoute userId dans la liste de dépendances du useEffect pour qu'il se déclenche à chaque changement de userId

  const check = (product, keyIndex) => {
    if (product) {
      const firstKey = Object.keys(product)[keyIndex]
      if (firstKey) {
        return product[firstKey]
      }
    }
    return 'Error'
  }

  return (
    <React.Fragment>
      {isDataLoading && !isSignComplete && !isLoginComplete ? (
        <Loader />
      ) : (message || errorMes) && !isSignComplete && !isLoginComplete ? (
        <Feedback />
      ) : (
        <div className="container my-2">
          <div className="row my-2 align-items-center">
            <span className="col">{check(product, 1)}</span>
            {product && product.isSold ? (
              <>
                <span className="col  text-end">
                  <span className="fs-4">{check(product, 6)} €</span>

                  <span className=" text-decoration-line-through offset-1">
                    {check(product, 4)} €
                  </span>
                </span>
              </>
            ) : (
              <span className="col text-end">{check(product, 4)} €</span>
            )}
          </div>
          <div className="row my-2">
            <img src={check(product, 3)} alt={`${check(product, 2)} - cover`} />
          </div>
          <div className="border p-2">{check(product, 2)}</div>
          <div className="my-3 text-end">
            <button
              className="btn btn-primary"
              onClick={() => alert('Produit ajouté au panier')}
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default ViewMore
