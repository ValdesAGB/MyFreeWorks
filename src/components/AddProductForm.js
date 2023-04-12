import React, { useContext, useEffect } from 'react'
import { addProductElement, apiProductLink } from '../data'
import { Link } from 'react-router-dom'
import {
  LoadingContext,
  MessageContext,
  NewProductContext,
  UserContext,
} from '../untils/context'
import Feedback from './Feedback'
import { Loader } from '../untils/Loader'

function AddProductForm() {
  const {
    setName,
    setDescription,
    setPrice,
    setCover,
    setIsSold,
    setSoldPrice,
    setCategorie,
    isSold,
    cover,
    newProduct,
  } = useContext(NewProductContext)
  const {
    isDataLoading,
    toggleIsDataLoading,
    isSignComplete,
    isLoginComplete,
  } = useContext(LoadingContext)

  const { userId } = useContext(UserContext)

  const {
    message,
    errorMes,
    codeErr,
    toggleMessage,
    toggleErrorMes,
    toggleCodeErr,
  } = useContext(MessageContext)

  const set = (id, event) => {
    switch (id) {
      case 'nameProd':
        setName(event.target.value)
        break
      case 'descriptionProd':
        setDescription(event.target.value)
        break
      case 'priceProd':
        setPrice(event.target.value)
        break
      case 'coverProd':
        setCover(event.target.value)
        break
      case 'soldPriceProd':
        setSoldPrice(event.target.value)
        break
      case 'categorieProd':
        setCategorie(event.target.value)
        break
      default:
        setIsSold(event.target.checked)
        break
    }
  }

  const upperCaseLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  const fetchElements = {
    fetchPost: {
      url: `${apiProductLink}`,
      options: {
        method: 'POST',
        body: JSON.stringify(newProduct),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userId && userId.token}`,
        },
      },
    },
  }

  const save = (e) => {
    e.preventDefault()
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
    setName(null)
    setDescription(null)
    setPrice(null)
    setCover(null)
    setIsSold(null)
    setSoldPrice(null)
    setCategorie('autres')
  }

  const button = () => {
    return (
      <>
        {userId ? (
          <span className="my-4 row">
            <span
              className=" btn col-12 col-md-6 text-center mb-2 mb-md-0"
              onClick={() => close()}
            >
              Nouvel objet.?
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

  useEffect(() => {
    toggleMessage(null)
    toggleErrorMes(null)
    toggleCodeErr(null)
    setName(null)
    setDescription(null)
    setPrice(null)
    setCover(null)
    setIsSold(false)
    setSoldPrice(0)
    setCategorie('autres')
  }, [])

  useEffect(() => {
    if (!isSold) {
      setSoldPrice(0)
    }
  }, [isSold])

  return (
    <React.Fragment>
      {isDataLoading && !isSignComplete && !isLoginComplete ? (
        <Loader />
      ) : (message || errorMes) && !isSignComplete && !isLoginComplete ? (
        <Feedback button={button()} />
      ) : (
        <form className="col-12 col-sm-10 col-md-8 col-lg-6">
          {addProductElement.map(
            ({
              id,
              title,
              role,
              name,
              inputType,
              labelClass,
              inputClass,
              divClass,
              selectClass,
              placeholder,
              option,
              value,
              option1,
              option2,
              option3,
              option4,
              option5,
            }) => (
              <span key={id}>
                <div
                  className={
                    isSold === true && id === 'soldPriceProd'
                      ? 'mb-4'
                      : divClass
                  }
                >
                  <label htmlFor={id} className={labelClass} key={id}>
                    {title}
                  </label>
                  {inputType && !name && (
                    <input
                      placeholder={placeholder}
                      type={inputType}
                      className={inputClass}
                      id={id}
                      aria-describedby="emailHelp"
                      onChange={(e) => set(id, e)}
                    />
                  )}
                  {cover && id === 'coverProd' ? (
                    <div className="row my-3">
                      <img src={cover} alt="cover" />
                    </div>
                  ) : null}
                  {name && (
                    <input
                      type={inputType}
                      role={role}
                      name={name}
                      className={inputClass}
                      id={id}
                      aria-describedby="emailHelp"
                      onChange={(e) => set(id, e)}
                    />
                  )}

                  {inputType === '' && (
                    <textarea
                      className={inputClass}
                      onChange={(e) => set(id, e)}
                    ></textarea>
                  )}

                  {selectClass && !inputType && (
                    <select
                      className={selectClass}
                      aria-label="Default select example"
                      onChange={(e) => set(id, e)}
                    >
                      <option value={value}>{option}</option>
                      <option value={option1}>
                        {upperCaseLetter(option1)}
                      </option>
                      <option value={option2}>
                        {upperCaseLetter(option2)}
                      </option>
                      <option value={option3}>
                        {upperCaseLetter(option3)}
                      </option>
                      <option value={option4}>
                        {upperCaseLetter(option4)}
                      </option>
                      <option value={option5}>
                        {upperCaseLetter(option5)}
                      </option>
                    </select>
                  )}
                </div>
              </span>
            )
          )}
          {/* revoir  le bouton pour que tous soit rempli avant que le bouton ne soit disponible.*/}
          <button
            type="submit"
            className={`btn btn-primary $/*{
            Object.values(newProduct).every((value) => value !== null)
              ? null
              : 'disabled'
          }*/`}
            onClick={(e) => save(e)}
          >
            Enrégistrer
          </button>
        </form>
      )}
    </React.Fragment>
  )
}

export default AddProductForm
