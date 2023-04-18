import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { addProductElement, apiProductLink } from '../data'
import {
  LoadingContext,
  MessageContext,
  NewProductContext,
  ProductContext,
  UserContext,
} from '../untils/context'
import { Loader } from '../untils/Loader'
import Feedback from './Feedback'
import { object } from 'prop-types'

function Update() {
  const { id } = useParams()
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

  const { product, toggleProduct } = useContext(ProductContext)
  const {
    setName,
    setDescription,
    setPrice,
    setCover,
    setIsSold,
    setSoldPrice,
    setCategorie,
    name,
    description,
    price,
    cover,
    isSold,
    soldPrice,
    categorie,
    newProduct,
  } = useContext(NewProductContext)

  const { userId } = useContext(UserContext)
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
        setCover(event.target.files[0])
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

  const check = (product, keyIndex) => {
    if (product) {
      const firstKey = Object.keys(product)[keyIndex]
      if (firstKey) {
        return product[firstKey]
      }
    }
    return 'Error'
  }

  const data = (id) => {
    switch (id) {
      case 'nameProd':
        return check(product, 1)

      case 'descriptionProd':
        return check(product, 2)

      case 'coverProd':
        return ''
      case 'priceProd':
        return check(product, 4)

      case 'soldPriceProd':
        return check(product, 6)
      case 'categorieProd':
        return check(product, 7)
      default:
        return check(product, 5)
    }
  }

  const upperCaseLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  const fetchElements = {
    url: `${apiProductLink}/${id}`,
    GEToptions: {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userId && userId.token}`,
      },
    },

    /* PUToptions: {
      method: 'PUT',
      body: formData,
      headers: {
        Accept: 'application/json',
        // 'Content-Type': 'application/json',
        Authorization: `Bearer ${userId && userId.token}`,
      },
    },*/
  }

  const getOfFetch = () => {
    toggleMessage(null)
    toggleErrorMes(null)
    toggleCodeErr(null)

    toggleIsDataLoading(true)
    fetch(fetchElements.url, fetchElements.GEToptions)
      .then((promise) => {
        if (!promise.ok) {
          throw promise
        } else {
          return promise.json()
        }
      })
      .then((prod) => {
        toggleProduct(prod)
        setName(prod.name)
        setDescription(prod.description)
        setPrice(prod.price)
        setCover(prod.cover)
        setIsSold(prod.isSold)
        setSoldPrice(prod.soldPrice)
        setCategorie(prod.categorie)
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

  useEffect(() => {
    if (!isSold) {
      setSoldPrice(0)
    }
  }, [isSold])

  useEffect(() => {
    getOfFetch()
  }, [])

  const update = (e) => {
    e.preventDefault()
    toggleIsDataLoading(true)
    const formData = new FormData()
    formData.append('image', cover)
    formData.append('name', name)
    formData.append('description', description)
    formData.append('price', price)
    formData.append('isSold', isSold)
    formData.append('soldPrice', soldPrice)
    formData.append('categorie', categorie)
    fetch(fetchElements.url, {
      method: 'PUT',
      body: formData,
      headers: {
        Accept: 'application/json',
        // 'Content-Type': 'application/json',
        Authorization: `Bearer ${userId && userId.token}`,
      },
    })
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
    getOfFetch()
  }

  const button = () => {
    return (
      <span className="my-4 row">
        <span
          className=" btn col-12 col-md-6 text-center mb-2 mb-md-0"
          onClick={() => close()}
        >
          Modifié à nouveau ?
        </span>

        <Link
          to={`/view/product/${id}`}
          className="text-center col-12 col-md-6"
        >
          Voir le produit modifé
        </Link>
      </span>
    )
  }

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
                      defaultValue={data(id)}
                      onChange={(e) => set(id, e)}
                    />
                  )}
                  {id === 'coverProd' && (
                    <div className="mt-3">
                      En ajoutant une nouvelle image, vous modifez l'ancienne.
                      Dans le cas, contraire, l'ancienne est maintenue
                    </div>
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
                      defaultChecked={data(id)}
                      onChange={(e) => set(id, e)}
                    />
                  )}

                  {inputType === '' && (
                    <textarea
                      className={inputClass}
                      defaultValue={data(id)}
                      onChange={(e) => set(id, e)}
                    ></textarea>
                  )}

                  {selectClass && !inputType && (
                    <select
                      className={selectClass}
                      aria-label="Default select example"
                      defaultValue={data(id)}
                      onChange={(e) => set(id, e)}
                    >
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
            onClick={(e) => update(e)}
          >
            Modifier
          </button>
        </form>
      )}
    </React.Fragment>
  )
}

export default Update
