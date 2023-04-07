import React from 'react'
import { Link, useParams } from 'react-router-dom'

function BoardHeader() {
  const { id } = useParams()
  return (
    <React.Fragment>
      {/*<div className="my-4">
              {hours < 12 ? (
                <h4 className=" fw-light justify-content-end d-flex">{`Bonjour ${
                  userLogin !== null ? userLogin.userName.split(' ')[0] : ''
                }`}</h4>
              ) : (
                <h4 className=" fw-light justify-content-end d-flex">{`Bonsoir ${
                  userLogin !== null ? userLogin.userName.split(' ')[0] : ''
                }`}</h4>
              )}
            </div>*/}

      <h4 className=" fw-light justify-content-end d-none d-md-flex">
        Bonjour {id}
      </h4>
      <div className="my-4 row  align-items-center">
        <div className="col-8">
          <h4>Vos produits :</h4>
        </div>
        <div className="col d-flex justify-content-end">
          <Link to="/newproduct" className="btn btn-primary d-none d-md-block">
            <span> Ajouter un nouveau produit</span>
          </Link>
          <Link to="/newproduct" className="btn d-block d-md-none fs-5">
            <i className="bi bi-plus-lg"></i>
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BoardHeader
