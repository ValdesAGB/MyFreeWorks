import React, { useContext, useEffect } from 'react'
import { apiUserLink, check } from '../../data'
import Cookies from 'js-cookie'
import { useParams } from 'react-router-dom'
import {
  ConfirmAccountContext,
  LoadingContext,
  MessageContext,
  UserContext,
} from '../../untils/context'
import { Loader } from '../../untils/Loader'
import Feedback from '../../components/Feedback'
import styled from 'styled-components'

function ConfirmAccount() {
  const { id } = useParams()
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

  const { confirm, setCode, setChekInfos } = useContext(ConfirmAccountContext)
  const accountState = userId && userId.stateAccount

  const fetchElements = {
    get: {
      url: `${apiUserLink}/${id}`,
      options: {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userId && userId.token}`,
        },
      },
    },

    post: {
      url: `${apiUserLink}/confirmAccount/${id}`,
      options: {
        method: 'POST',
        body: JSON.stringify(confirm),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userId && userId.token}`,
        },
      },
    },

    getNewCode: {
      url: `${apiUserLink}/newconfirmcode/${id}`,
      options: {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userId && userId.token}`,
        },
      },
    },
  }

  const logout = () => {
    Cookies.remove('userInfos')
    alert(
      "Vous avez été déconnecter. Ce n'est pas votre faute et ce n'est pas grave non plus. Veuillez juste vous reconnecter et reprendre vos activités.😊 Nous nous excusons pour ce dérangement. !😉"
    )
    window.location.pathname = '/'
  }

  useEffect(() => {
    toggleMessage(null)
    toggleErrorMes(null)
    toggleCodeErr(null)
    toggleIsDataLoading(true)
    fetch(fetchElements.get.url, fetchElements.get.options)
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

  const AlreadyActived = () => {
    setTimeout(() => {
      window.location.pathname = `/dashboard/${id}`
    }, 3000)
    return (
      <section className="my-3 text-center">
        <span className="fs-4">Votre compte est déja activé.</span>
      </section>
    )
  }

  const ConfirmeAccount = () => {
    toggleMessage(null)
    toggleErrorMes(null)
    toggleCodeErr(null)
    toggleIsDataLoading(true)
    fetch(fetchElements.post.url, fetchElements.post.options)
      .then((promise) => {
        if (!promise.ok) {
          throw promise
        } else {
          return promise.json()
        }
      })
      .then((mess) => {
        toggleMessage(mess)
        toggleIsDataLoading(false)
        setTimeout(() => {
          logout()
        }, 2000)
      })
      .catch((error) => {
        error.json().then((errorMessage) => {
          toggleErrorMes(errorMessage.error)
          toggleCodeErr(error.status)
          toggleIsDataLoading(false)
        })
      })
  }

  const retry = () => {
    toggleMessage(null)
    toggleErrorMes(null)
    toggleCodeErr(null)
  }

  const button = () => {
    if (codeErr === 400) {
      return (
        <button className="btn btn-primary mb-3" onClick={() => retry()}>
          Réessayer
        </button>
      )
    }
  }

  const NewConfirmAccount = () => {
    toggleMessage(null)
    toggleErrorMes(null)
    toggleCodeErr(null)
    toggleIsDataLoading(true)

    fetch(fetchElements.getNewCode.url, fetchElements.getNewCode.options)
      .then((promise) => {
        if (!promise.ok) {
          throw promise
        } else {
          return promise.json()
        }
      })
      .then((message) => {
        toggleMessage(message)
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
  const text = () => {
    const sex = check(userInfos, 4)
    return (
      <span>
        Je soussigné{' '}
        {sex === 'Masculin' ? 'M.' : sex === 'Féminin' ? 'Mme' : 'M./Mme.'} "
        {check(userInfos, 1)} {check(userInfos, 2)}" reconnait que les
        informations fournies sont authentiques.
      </span>
    )
  }
  const SPAN = styled.span`
    &:hover {
      cursor: pointer;
    }
  `
  const newConfirmCode = () => {
    return (
      <SPAN className="text-primary" onClick={() => NewConfirmAccount()}>
        Renvoyer le code de confirmation
      </SPAN>
    )
  }

  return (
    <React.Fragment>
      {isDataLoading && !isSignComplete && !isLoginComplete ? (
        <Loader />
      ) : (message || errorMes) && !isSignComplete && !isLoginComplete ? (
        <Feedback button={button()} />
      ) : accountState ? (
        AlreadyActived()
      ) : (
        <>
          <section className="my-5 row justify-content-center">
            <div className="card col-8 mb-4">
              <div className="card-body">
                <h5 className="card-title">Code de confimarion de compte</h5>
                <p className="card-text">
                  Un code de confirmation a été envoyé à votre adresse mail.
                  Veuillez véririfer et entrer le ici.
                </p>
                <div className="form-floating my-2">
                  <textarea
                    className="form-control"
                    placeholder="Entrez le code de confirmation"
                    id="floatingTextarea"
                    onChange={(e) => setCode(e.target.value)}
                  ></textarea>
                  <label htmlFor="floatingTextarea">Code</label>
                </div>
                <div>{newConfirmCode()}</div>
              </div>
            </div>
            <div className="form-check col-8 ">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="confirmAccount"
                onClick={(e) => setChekInfos(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="confirmAccount">
                {text()}
              </label>
            </div>
            <div className="col-8 text-center mt-5">
              <button
                className={`btn btn-success ${
                  Object.values(confirm).every(
                    (value) => value !== null && value !== false && value !== ''
                  )
                    ? null
                    : 'disabled'
                }`}
                onClick={() => ConfirmeAccount()}
              >
                Confirmé
              </button>
            </div>
          </section>
        </>
      )}
    </React.Fragment>
  )
}

export default ConfirmAccount
