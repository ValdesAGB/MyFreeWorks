import React, { useContext } from 'react'
import BoardHeader from './BoardHeader'
import Tableau from './Tableau'
import { LoadingContext, ProductContext } from '../untils/context'
import { Loader } from '../untils/Loader'

function Board() {
  const { allProducts } = useContext(ProductContext)
  const { isDataLoading, isSignComplete, isLoginComplete } =
    useContext(LoadingContext)
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
    </React.Fragment>
  )
}

export default Board
