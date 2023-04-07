import React from 'react'
import styled from 'styled-components'
import { police } from '../untils'

function Button({ name, price, soldPrice }) {
  const ButtonStyle = styled.button`
    font-family: ${police.ff1};
  `

  function things() {
    let Xprice = soldPrice !== 0 ? `${soldPrice} $ au lieu de ${price}` : price
    alert(`Nom : ${name} ; Prix : ${Xprice} $`)
  }
  return (
    <div>
      <ButtonStyle className="btn btn-primary p-1" onClick={() => things()}>
        Ajouter au panier
      </ButtonStyle>
    </div>
  )
}

export default Button
