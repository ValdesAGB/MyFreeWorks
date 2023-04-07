import React, { useContext, useState } from 'react'
import { passwordAdvice, registrationElement } from '../data'
import { AuthContext, CheckPasswordContext } from '../untils/context'
import Icone from './Icone'

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

  return (
    <form>
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
                value={value}
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
        onClick={(e) => {
          e.preventDefault()
          console.log(signup)
        }}
      >
        S'inscrire
      </button>
    </form>
  )
}

export default RegistrationForm
