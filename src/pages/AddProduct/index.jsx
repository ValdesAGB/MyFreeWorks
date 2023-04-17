import React from 'react'
import AddProductForm from '../../components/AddProductForm'

function AddProduct() {
  const pageTitle = 'Nouveau produit :'
  return (
    <React.Fragment>
      <span className="my-3 row justify-content-center">
        <h4>{pageTitle} </h4>
        <AddProductForm />
      </span>
    </React.Fragment>
  )
}

export default AddProduct
