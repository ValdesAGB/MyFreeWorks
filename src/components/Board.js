import React, { useContext } from 'react'
import BoardHeader from './BoardHeader'
import Tableau from './Tableau'
import { LoadingContext, ProductContext, UserContext } from '../untils/context'
import { Loader } from '../untils/Loader'
import Cookies from 'js-cookie'

function Board() {
  const { allProducts } = useContext(ProductContext)
  const { isDataLoading, isSignComplete, isLoginComplete } =
    useContext(LoadingContext)
  const { userId } = useContext(UserContext)
  const logout = (event) => {
    event.preventDefault()
    Cookies.remove('userInfos')
    alert('A la prochaine.😉')
    window.location.pathname = '/'
  }
  return (
    <React.Fragment>
      <BoardHeader />
      <Tableau />
      <div className="text-end my-2 my-md-5">
        {isDataLoading && !isSignComplete && !isLoginComplete ? (
          <Loader />
        ) : (
          <>
            <span className="text-decoration-underline">Total:</span>
            <span> {allProducts ? allProducts.length : 0} produit(s)</span>
          </>
        )}
      </div>
      <div className="text-end my-2 my-md-5">
        {userId ? (
          <span className="btn btn-danger" onClick={(e) => logout(e)}>
            Se déconnecter
          </span>
        ) : null}
      </div>
    </React.Fragment>
  )
}

export default Board
