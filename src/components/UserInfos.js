import React, { useContext, useEffect } from 'react'
import { LoadingContext, MessageContext, UserContext } from '../untils/context'
import { apiUserLink, check } from '../data'
import { Loader } from '../untils/Loader'
import Feedback from './Feedback'

function UserInfos({ id }) {
  const { userId, userInfos, toggleUserInfos } = useContext(UserContext)
  const {
    message,
    errorMes,
    codeErr,
    toggleMessage,
    toggleErrorMes,
    toggleCodeErr,
  } = useContext(MessageContext)

  const {
    isDataLoading,
    toggleIsDataLoading,
    isSignComplete,
    isLoginComplete,
  } = useContext(LoadingContext)

  const fetchElements = {
    fetchUrl: `${apiUserLink}/${id}`,
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
    toggleIsDataLoading(true)
    fetch(fetchElements.fetchUrl, fetchElements.fetchOptions)
      .then((promise) => {
        if (!promise.ok) {
          throw promise
        } else {
          return promise.json()
        }
      })
      .then((infos) => {
        toggleUserInfos(infos)
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
      {isDataLoading && !isSignComplete && !isLoginComplete ? (
        <Loader />
      ) : (message || errorMes) && !isSignComplete && !isLoginComplete ? (
        <Feedback />
      ) : (
        <div>
          <div>
            <span>Nom et prénom(s) : </span>
            <span>
              {check(userInfos, 1)} {check(userInfos, 2)}
            </span>
          </div>
          <div className="my-2">
            <span>Date de naissance : </span>
            <span>{check(userInfos, 3)}</span>
          </div>
          <div className="my-2">
            <span>Sexe : </span>
            <span>{check(userInfos, 4)}</span>
          </div>
          <div className="my-2">
            <span>Adresse mail : </span>
            <span>{check(userInfos, 5)}</span>
          </div>
          <div className="my-2">
            <span>Mot de passe : </span>
            <span>*************</span>
          </div>
          <div className="my-2">
            <span>Vous nous avez rejoint le : </span>
            <span>{check(userInfos, 7).split('T')[0]}</span>
          </div>
          <div>
            <span>Denière mise à jour : </span>
            <span>{check(userInfos, 8).split('T')[0]}</span>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default UserInfos
