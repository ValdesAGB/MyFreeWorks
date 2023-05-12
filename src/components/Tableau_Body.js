import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  LoadingContext,
  MessageContext,
  ProductContext,
  UserContext,
} from '../untils/context'
import { apiProductLink, emptyDashboard } from '../data'
import { Loader } from '../untils/Loader'
import Feedback from './Feedback'

function Tableau_Body() {
  const { id } = useParams()
  const { allProducts, toggleAllProducts } = useContext(ProductContext)
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

  const { userId } = useContext(UserContext)

  useEffect(() => {
    toggleMessage(null)
    toggleErrorMes(null)
    toggleCodeErr(null)
  }, [])

  const fetchElements = {
    fetchUrl: `${apiProductLink}/user/${id}`,
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
    toggleAllProducts(null)
    toggleIsDataLoading(true)
    fetch(fetchElements.fetchUrl, fetchElements.fetchOptions)
      .then((promise) => {
        if (!promise.ok) {
          throw promise
        } else {
          return promise.json()
        }
      })
      .then((productsList) => {
        toggleAllProducts(productsList)
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

  return (
    <React.Fragment>
      <tbody className="table-group-divider row">
        {isDataLoading && !isSignComplete && !isLoginComplete ? (
          <Loader />
        ) : (message || errorMes) && !isSignComplete && !isLoginComplete ? (
          <Feedback />
        ) : allProducts && allProducts.length === 0 ? (
          emptyDashboard
        ) : (
          allProducts &&
          allProducts.map(({ _id, name, isSold, price }) => (
            <tr key={_id} className="row text-center">
              <td className="col-3">{name.slice(0, 6) + '...'}</td>
              <td className="col-3">{price}</td>
              <td className="col-3">{isSold ? 'Oui' : 'Non'}</td>
              <td className="col-3">
                <Link to={`/view/product/${_id}`}>
                  <i
                    className="fs-5 text-black bi bi-eye"
                    title="Voir le produit"
                  ></i>
                </Link>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </React.Fragment>
  )
}

export default Tableau_Body
