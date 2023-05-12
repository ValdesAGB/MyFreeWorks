import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  LoadingContext,
  MessageContext,
  ProductContext,
  SupprimedContext,
  UserContext,
} from '../untils/context'
import { apiProductLink } from '../data'
import { Loader } from '../untils/Loader'
import Feedback from './Feedback'
import UserViewMd from './UserViewMd'
import UserViewSm from './UserViewSm'

function UserView() {
  const { id } = useParams()
  const { product, toggleProduct } = useContext(ProductContext)
  const { sup, toggleSup } = useContext(SupprimedContext)

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
    Url: `${apiProductLink}/${id}`,
    GetOptions: {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userId && userId.token}`,
      },
    },
    DeleteOptions: {
      method: 'DELETE',
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

  const button = () => {
    if (sup) {
      setTimeout(() => {
        window.location.pathname = `/dashboard/${userId && userId.userId}`
      }, 2000)
    }
    return (
      <span className="my-5">
        Vous serez rediriger vers votre tableau de bord dans un instant.
      </span>
    )
  }

  const supprimed = () => {
    toggleSup(true)
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
      <section className="container my-2">
        {isDataLoading && !isSignComplete && !isLoginComplete ? (
          <Loader />
        ) : (message || errorMes) && !isSignComplete && !isLoginComplete ? (
          <Feedback button={button()} />
        ) : (
          <>
            <UserViewMd product={product} supprimed={supprimed} />

            <UserViewSm product={product} supprimed={supprimed} />
          </>
        )}
      </section>
    </React.Fragment>
  )
}

export default UserView
