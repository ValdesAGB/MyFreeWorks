import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { apiLink, emptyDashboard } from '../data'
import {
  LoadingContext,
  MessageContext,
  ProductContext,
} from '../untils/context'
import { Loader } from '../untils/Loader'
import Feedback from './Feedback'

function Tableau_md_Body() {
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

  const modifyCover = (cover) => {
    const parts = cover.split('://')
    const secondPart = parts[1]

    const modifiedCover = '...' + secondPart.slice(0, 4) + '...' // Remplacement des six premiers caractères par '....'

    return modifiedCover
  }

  return (
    <React.Fragment>
      <tbody className="table-group-divider row ">
        {isDataLoading ? (
          <Loader />
        ) : message || errorMes ? (
          <Feedback />
        ) : allProducts && allProducts.length === 0 ? (
          emptyDashboard
        ) : (
          allProducts &&
          allProducts.map(
            ({
              _id,
              name,
              cover,
              isSold,
              price,
              soldPrice,
              categorie,
              description,
              createdAt,
              updatedAt,
            }) => (
              <tr key={_id} className="row text-center">
                <td className="col">{'...' + _id.slice(4, 6) + '...'}</td>
                <td className="col">{name.slice(0, 4) + '...'}</td>
                <td className="col">{description.slice(0, 5) + '...'}</td>
                <td className="col">{cover && modifyCover(cover)}</td>
                <td className="col">{price.toLocaleString('fr-FR')}</td>
                <td className=" col">{isSold ? 'Oui' : 'Non'}</td>
                <td className=" col">
                  {isSold ? soldPrice.toLocaleString('fr-FR') : 0}
                </td>
                <td className=" col">{categorie}</td>
                <td className=" col">{createdAt && createdAt.split('T')[0]}</td>
                <td className=" col">{updatedAt && updatedAt.split('T')[0]}</td>
                <td className="col">
                  <Link to={`/view/product/${_id}`}>
                    <i
                      className="fs-5 text-black bi bi-eye"
                      title="Voir le produit"
                    ></i>
                  </Link>
                </td>
              </tr>
            )
          )
        )}
      </tbody>
    </React.Fragment>
  )
}

export default Tableau_md_Body
