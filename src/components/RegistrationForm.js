import React, { useContext, useState } from 'react'
import { apiUserLink, passwordAdvice, registrationElement } from '../data'
import {
  AuthContext,
  CheckPasswordContext,
  LoadingContext,
  MessageContext,
} from '../untils/context'
import Icone from './Icone'
import { Loader } from '../untils/Loader'
import Feedback from './Feedback'

function RegistrationForm() {
  const { iconeState } = useContext(CheckPasswordContext)

  const {
    setSignLastName,
    setSignFirstName,
    setSignBirthDate,
    setSignSex,
    setSignMail,
    setSignPassword,
    setSignConfirmPassword,
    signup,
  } = useContext(AuthContext)

  const {
    isDataLoading,
    toggleIsDataLoading,
    setIsSignComplete,
    isSignComplete,
  } = useContext(LoadingContext)

  const {
    message,
    errorMes,
    codeErr,
    toggleMessage,
    toggleErrorMes,
    toggleCodeErr,
  } = useContext(MessageContext)

  const set = (id, event, value) => {
    switch (id) {
      case 'lastName':
        setSignLastName(event.target.value)
        break
      case 'firstName':
        setSignFirstName(event.target.value)
        break
      case 'dateOfBirth':
        setSignBirthDate(event.target.value)
        break
      case 'mail':
        setSignMail(event.target.value)
        break
      case 'passwordRegistration':
        setSignPassword(event.target.value)
        break
      case 'checkPasswordRegistration':
        setSignConfirmPassword(event.target.value)
        break
      default:
        setSignSex(value)
        break
    }
  }

  const setValue = (id) => {
    switch (id) {
      case 'lastName':
        return signup.signLastName ? signup.signLastName : ''

      case 'firstName':
        return signup.signFirstName ? signup.signFirstName : ''
      case 'dateOfBirth':
        return signup.signBirthDate ? signup.signBirthDate : ''
      case 'mail':
        return signup.signMail ? signup.signMail : ''
      case 'passwordRegistration':
        return signup.signPassword ? signup.signPassword : ''
      case 'checkPasswordRegistration':
        return signup.signConfirmPassword ? signup.signConfirmPassword : ''
      default:
        return ''
    }
  }

  const [onFocus, setOnFocus] = useState(false)

  function handleFocus(id) {
    if (id === 'passwordRegistration') {
      setOnFocus(true)
    }
  }

  function handleBlur(id) {
    if (id === 'passwordRegistration') {
      setOnFocus(false)
    }
  }

  const divPasswordAdvice = () => {
    if (onFocus) {
      return (
        <div className="my-3 border rounded p-2">
          Votre mot de passe doit contenir au moins:
          <ul>
            {passwordAdvice.map(({ id, title }) => (
              <li key={id} className="fw-light">
                {title} ;
              </li>
            ))}
          </ul>
        </div>
      )
    } else {
      return null
    }
  }

  const close = () => {
    toggleMessage(null)
    toggleErrorMes(null)
    toggleCodeErr(null)
  }

  const button = () => {
    return (
      <>
        <span className="row my-4 text-center  align-items-center">
          {codeErr ? (
            <span className="col  btn " onClick={() => close()}>
              Formulaire
            </span>
          ) : null}

          <span
            data-bs-toggle="modal"
            data-bs-target="#connexionModal"
            className="btn col"
          >
            Se connecter
          </span>
        </span>
      </>
    )
  }

  const fetchElements = {
    fetchPost: {
      url: `${apiUserLink}/signup`,
      options: {
        method: 'POST',
        body: JSON.stringify(signup),
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

  const sign = (e) => {
    e.preventDefault()
    toggleMessage(null)
    toggleErrorMes(null)
    toggleCodeErr(null)
    setIsSignComplete(true)
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
        toggleMessage(message)
        toggleIsDataLoading(false)
        /* setTimeout(() => {
        window.location.pathname = `user/dashboard/${
          userLogin && userLogin.userId
        }`
      }, 3000)*/
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
    <form>
      {isDataLoading && isSignComplete ? (
        <Loader />
      ) : (message || errorMes) && isSignComplete ? (
        <Feedback button={button()} />
      ) : (
        <>
          {registrationElement.map(
            ({
              id,
              title,
              value,
              name,
              inputType,
              labelClass,
              inputClass,
              divClass,
            }) => (
              <div className={divClass} key={id}>
                <label htmlFor={id} className={labelClass} key={id}>
                  {title}
                </label>
                {name && inputType && (
                  <input
                    type={inputType}
                    // value={value}
                    name={name}
                    className={inputClass}
                    id={id}
                    aria-describedby="emailHelp"
                    onChange={(e) => set(id, e, value)}
                  />
                )}
                {inputType !== 'radio' && inputType !== '' && (
                  <input
                    type={
                      inputType === 'password' && iconeState === true
                        ? 'text'
                        : inputType
                    }
                    className={inputClass}
                    value={setValue(id)}
                    id={id}
                    aria-describedby="emailHelp"
                    onChange={(e) => set(id, e, value)}
                    onFocus={() => handleFocus(id)}
                    onBlur={() => handleBlur(id)}
                  />
                )}
                {inputType === '' && null}
                {id === 'passwordRegistration' && divPasswordAdvice()}
              </div>
            )
          )}
          <Icone id="registration" />

          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => sign(e)}
          >
            S'inscrire
          </button>
        </>
      )}
    </form>
  )
}

export default RegistrationForm
