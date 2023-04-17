import React, { useContext } from 'react'
import { UserContext } from '../untils/context'
import AddToCartBtn from './AddToCartBtn'

function Button({ name, price, soldPrice }) {
  const { userId } = useContext(UserContext)

  return (
    <React.Fragment>
      {userId ? (
        <div>
          <AddToCartBtn
            name={name}
            price={soldPrice ? soldPrice : price}
            nameBtn={'Ajouter au panier'}
          />
        </div>
      ) : null}
    </React.Fragment>
  )
}

export default Button
