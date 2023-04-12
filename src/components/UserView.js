import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  LoadingContext,
  MessageContext,
  ProductContext,
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
    </React.Fragment>
  )
}

export default UserView
