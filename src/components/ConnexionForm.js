import React, { useContext } from 'react'
import {
  AuthContext,
  CheckPasswordContext,
  LoadingContext,
  MessageContext,
} from '../untils/context'
import Icone from './Icone'
import { apiUserLink, decoded, encoded } from '../data'
import { Loader } from '../untils/Loader'
import Feedback from './Feedback'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

function ConnexionForm({ mapElement }) {
  const { iconeState } = useContext(CheckPasswordContext)
  const { setLogMail, setLogPaswword, login } = useContext(AuthContext)
  const {
    isDataLoading,
    toggleIsDataLoading,
    isLoginComplete,
    setIsLoginComplete,
  } = useContext(LoadingContext)
  const {
    message,
    errorMes,
    codeErr,
    toggleMessage,
    toggleErrorMes,
    toggleCodeErr,
  } = useContext(MessageContext)

  const fetchElements = {
    fetchPost: {
      url: `${apiUserLink}/login`,
      options: {
        method: 'POST',
        body: JSON.stringify(login),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          /*Authorization: `Bearer ${
            userLogin !== null ? userLogin.token : 'Error'
          }`,*/
        },
      },
    },
  }

  const log = (e) => {
    e.preventDefault()
    toggleMessage(null)
    toggleErrorMes(null)
    toggleCodeErr(null)
    setIsLoginComplete(true)
    toggleIsDataLoading(true)
    fetch(fetchElements.fetchPost.url, fetchElements.fetchPost.options)
      .then((promise) => {
        if (!promise.ok) {
          throw promise
        } else {
          return promise.json()
        }
      })
      .then((message) => {
        Cookies.set('userInfos', encoded(message))
        toggleMessage(message)
        toggleIsDataLoading(false)
        setTimeout(() => {
          window.location.pathname = `/dashboard/${message.userId}`
        }, 3000)
      })
      .catch((error) => {
        error.json().then((errorMessage) => {
          toggleErrorMes(errorMessage.error)
          toggleCodeErr(error.status)
          toggleIsDataLoading(false)
        })
      })
  }

  const close = () => {
    toggleMessage(null)
    toggleErrorMes(null)
    toggleCodeErr(null)
  }

  const setValue = (id) => {
    switch (id) {
      case 'adressMailModal':
        return login.logMail ? login.logMail : ''
      default:
        return login.logPaswword ? login.logPaswword : ''
    }
  }

  const button = () => {
    return (
      <>
        <span className="row my-4 text-center  align-items-center">
          {codeErr ? (
            <Link className="col  " onClick={() => close()}>
              Se connecter
            </Link>
          ) : null}
        </span>
      </>
    )
  }

  return (
    <React.Fragment>
      {isDataLoading && isLoginComplete ? (
        <Loader />
      ) : (message || errorMes) && isLoginComplete ? (
        <Feedback button={button()} />
      ) : (
        <form>
          {mapElement.map(
            ({ id, title, labelClass, inputClass, inputType, divClass }) => (
              <div className={divClass} key={id}>
                <label htmlFor={id} className={labelClass}>
                  {title}
                </label>
                <input
                  type={
                    id === 'passwordConnexionModal' && iconeState === true
                      ? 'text'
                      : inputType
                  }
                  value={setValue(id)}
                  className={inputClass}
                  id={id}
                  aria-describedby="emailHelp"
                  onChange={(e) => {
                    id === 'passwordConnexionModal'
                      ? setLogPaswword(e.target.value)
                      : setLogMail(e.target.value)
                  }}
                />
              </div>
            )
          )}
          <Icone id="connexion" />

          <button
            type="submit "
            className="btn btn-primary m-3"
            onClick={(e) => log(e)}
          >
            Se connecter
          </button>
        </form>
      )}
    </React.Fragment>
  )
}

export default ConnexionForm
