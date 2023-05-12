import React, { useContext, useEffect } from 'react'
import View from '../../components/View'
import { apiProductLink, emptyCategorie } from '../../data'
import {
  LoadingContext,
  MessageContext,
  ProductContext,
} from '../../untils/context'
import { Loader } from '../../untils/Loader'
import Feedback from '../../components/Feedback'

function Graphisme() {
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

  const categorie = 'poterie'

  const fetchElements = {
    fetchUrl: `${apiProductLink}/categorie/${categorie}`,
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
    toggleMessage(null)
    toggleErrorMes(null)
    toggleCodeErr(null)
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
    <section className="container my-2">
      <div className="row">
        {isDataLoading && !isSignComplete && !isLoginComplete ? (
          <Loader />
        ) : (message || errorMes) && !isSignComplete && !isLoginComplete ? (
          <Feedback />
        ) : allProducts && allProducts.length === 0 ? (
          emptyCategorie
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
            }) => (
              <View
                key={_id}
                id={_id}
                name={name}
                cover={cover}
                isSold={isSold}
                price={price}
                soldPrice={soldPrice}
                to={`/${categorie}`}
                description={description}
              />
            )
          )
        )}
      </div>
    </section>
  )
}

export default Graphisme
