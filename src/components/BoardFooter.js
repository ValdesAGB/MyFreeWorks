import React, { useContext } from 'react'
import { LoadingContext, ProductContext, UserContext } from '../untils/context'
import Cookies from 'js-cookie'
import { Loader } from '../untils/Loader'
import Parameter from './Parameter'

function BoardFooter() {
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
      {userId ? (
        <span className="text-end ">
          <div className="my-2  my-md-3">
            <Parameter />
          </div>
          <div className="">
            <span className="btn btn-danger" onClick={(e) => logout(e)}>
              Se déconnecter
            </span>
          </div>
        </span>
      ) : null}
    </React.Fragment>
  )
}

export default BoardFooter
