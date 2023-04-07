import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  LoadingContext,
  MessageContext,
  ProductContext,
} from '../untils/context'
import { apiLink, emptyDashboard } from '../data'
import { Loader } from '../untils/Loader'
import Feedback from './Feedback'

function Tableau_Body() {
  const { allProducts, toggleAllProducts } = useContext(ProductContext)
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
    fetchUrl: `${apiLink}/api/product`,
    fetchOptions: {
      method: 'GET',
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
        {isDataLoading ? (
          <Loader />
        ) : message || errorMes ? (
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
