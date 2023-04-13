import React, { useContext } from 'react'
import styled from 'styled-components'
import { police } from '../untils'
import { UserContext } from '../untils/context'

function Button({ name, price, soldPrice }) {
  const ButtonStyle = styled.button`
    font-family: ${police.ff1};
  `
  const { userId } = useContext(UserContext)

  function things() {
    let Xprice = soldPrice !== 0 ? `${soldPrice} $ au lieu de ${price}` : price
    alert(`Nom : ${name} ; Prix : ${Xprice} $`)
  }
  return (
    <React.Fragment>
      {userId ? (
        <div>
          <ButtonStyle
            className="btn btn-primary p-1"
            onClick={() =>
              alert(
                "Cette fonctionnnalité n'est pas encore disponible mais elle ne saurait tarder. Merci pour votre patience!"
              )
            }
          >
            Ajouter au panier
          </ButtonStyle>
        </div>
      ) : null}
    </React.Fragment>
  )
}

export default Button
