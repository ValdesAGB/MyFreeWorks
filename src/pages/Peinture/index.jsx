import React, { useContext, useEffect } from 'react'
import View from '../../components/View'
import { apiLink, emptyCategorie } from '../../data'
import {
  LoadingContext,
  MessageContext,
  ProductContext,
} from '../../untils/context'
import { Loader } from '../../untils/Loader'
import Feedback from '../../components/Feedback'

function Peinture() {
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

  const categorie = 'peinture'

  const fetchElements = {
    fetchUrl: `${apiLink}/api/product/categorie/${categorie}`,
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
        {isDataLoading ? (
          <Loader />
        ) : message || errorMes ? (
          <Feedback />
        ) : allProducts && allProducts === [] ? (
          { emptyCategorie }
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

export default Peinture
