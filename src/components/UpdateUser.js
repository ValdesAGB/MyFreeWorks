import React, { useContext, useEffect, useState } from 'react'
import { apiUserLink, check, updateUserElements } from '../data'
import {
  AuthContext,
  CheckPasswordContext,
  LoadingContext,
  MessageContext,
  UserContext,
} from '../untils/context'
import { Loader } from '../untils/Loader'
import Feedback from './Feedback'
import Icone from './Icone'
import { Link, useParams } from 'react-router-dom'

function UpdateUser() {
  const { id } = useParams()
  const { iconeState } = useContext(CheckPasswordContext)
  const {
    setupdateLastName,
    setupdateFirstName,
    setupdateBirthDate,
    setupdateSex,
    setupdateMail,
    setupdateOldPassword,
    setnewPassword,
    udpateUser,
  } = useContext(AuthContext)
  const [updatePassword, setUpdatePassword] = useState(false)
  const [confirmUpdate, setConfirmUpdate] = useState(false)
  const { isDataLoading, toggleIsDataLoading, isSignComplete } =
    useContext(LoadingContext)
  const {
    message,
    errorMes,
    codeErr,
    toggleMessage,
    toggleErrorMes,
    toggleCodeErr,
  } = useContext(MessageContext)

  const componentTitle = `Modification :`

  const { userId, userInfos, toggleUserInfos } = useContext(UserContext)

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

    put: {
      url: `${apiUserLink}/update/${id}`,
      options: {
        method: 'PUT',
        body: JSON.stringify(udpateUser),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userId && userId.token}`,
        },
      },
    },
  }

  useEffect(() => {
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
        setupdateLastName(check(infos, 1))
        setupdateFirstName(check(infos, 2))
        setupdateBirthDate(check(infos, 3))
        setupdateMail(check(infos, 5))
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

  const setValue = (id) => {
    switch (id) {
      case 'lastName':
        return check(userInfos, 1)

      case 'firstName':
        return check(userInfos, 2)

      case 'dateOfBirth':
        return check(userInfos, 3)

      case 'mail':
        return check(userInfos, 5)

      default:
        return ''
    }
  }

  const set = (id, event, value) => {
    switch (id) {
      case 'lastName':
        setupdateLastName(event.target.value)
        break
      case 'firstName':
        setupdateFirstName(event.target.value)
        break
      case 'dateOfBirth':
        setupdateBirthDate(event.target.value)
        break
      case 'mail':
        setupdateMail(event.target.value)
        break
      case 'oldPassword':
        setupdateOldPassword(event.target.value)
        break
      case 'newPassword':
        setnewPassword(event.target.value)
        break
      default:
        return ''
    }
  }

  const update = (e) => {
    e.preventDefault()
    toggleMessage(null)
    toggleErrorMes(null)
    toggleCodeErr(null)
    fetch(fetchElements.put.url, fetchElements.put.options)
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

  const close = () => {
    toggleMessage(null)
    toggleErrorMes(null)
    toggleCodeErr(null)
    setConfirmUpdate(false)
  }

  const button = () => {
    return (
      <>
        {userId && !codeErr ? (
          <span className="my-4 row">
            <span
              className=" btn col-12 col-md-6 text-center mb-2 mb-md-0"
              onClick={() => close()}
            >
              Modifiez à nouveau.?
            </span>

            <Link
              to={`/dashboard/${userId.userId}`}
              className="text-center col-12 col-md-6"
            >
              Tableau de board
            </Link>
          </span>
        ) : codeErr ? (
          <span className="my-4 row">
            <span
              className=" btn col-12 col-md-6 text-center mb-2 mb-md-0"
              onClick={() => close()}
            >
              Retour
            </span>

            <Link
              to={`/dashboard/${userId.userId}`}
              className="text-center col-12 col-md-6"
            >
              Tableau de board
            </Link>
          </span>
        ) : null}
      </>
    )
  }

  return (
    <React.Fragment>
      <section className="my-4">
        <h2>{componentTitle}</h2>
        <form className="container ">
          {isDataLoading && !isSignComplete ? (
            <Loader />
          ) : (message || errorMes) && !isSignComplete ? (
            <Feedback button={button()} />
          ) : confirmUpdate ? (
            <>
              <div className="mb-3">
                <label htmlFor={id} className="form-label">
                  Entrez votre mot de passe pour confirmer les modifications :
                </label>

                <input
                  type="password"
                  className="form-control"
                  id={id}
                  aria-describedby="emailHelp"
                  onChange={(e) => set('oldPassword', e)}
                />
              </div>

              <div className="row my-5">
                <button
                  type="submit"
                  className="btn btn-primary col mx-2 mx-md-5"
                  onClick={(e) => update(e)}
                >
                  Confirmé
                </button>

                <button
                  type="submit"
                  className="btn btn-primary col mx-2 mx-md-5"
                  onClick={(e) => setConfirmUpdate(false)}
                >
                  Retour
                </button>
              </div>
            </>
          ) : (
            <>
              {updateUserElements.map(
                ({
                  id,
                  title,
                  inputType,
                  labelClass,
                  inputClass,
                  divClass,
                  placeholder,
                }) => (
                  <div
                    className={
                      (id === 'oldPassword' || id === 'newPassword') &&
                      !updatePassword
                        ? 'd-none'
                        : divClass
                    }
                    key={id}
                  >
                    <label htmlFor={id} className={labelClass} key={id}>
                      {title}
                    </label>

                    <input
                      type={
                        inputType === 'password' && iconeState === true
                          ? 'text'
                          : inputType
                      }
                      className={inputClass}
                      placeholder={placeholder}
                      defaultValue={setValue(id)}
                      id={id}
                      aria-describedby="emailHelp"
                      onChange={(e) => set(id, e)}
                      //onFocus={() => handleFocus(id)}
                      // onBlur={() => handleBlur(id)}
                    />

                    {/*id === 'passwordRegistration' && divPasswordAdvice()*/}
                  </div>
                )
              )}
              {!updatePassword ? (
                <div
                  className="  text-end"
                  onClick={() => setUpdatePassword(true)}
                >
                  <span className="text-decoration-underline text-primary btn">
                    Voulez - vous modifiez votre mot de passe.?
                  </span>
                </div>
              ) : (
                <div
                  className="  text-end"
                  onClick={() => setUpdatePassword(false)}
                >
                  <span className="text-decoration-underline text-primary btn">
                    Annulez la modification de mot de passe .?
                  </span>
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault()
                  setConfirmUpdate(true)
                }}
              >
                Modifié
              </button>
            </>
          )}
        </form>
      </section>
    </React.Fragment>
  )
}

export default UpdateUser
