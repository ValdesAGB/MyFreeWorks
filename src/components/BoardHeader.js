import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../untils/context'

function BoardHeader() {
  const { userId } = useContext(UserContext)
  const username = userId && userId.username
  var now = new Date()
  var hours = now.getHours()

  return (
    <React.Fragment>
      {username ? (
        <div className="my-4">
          {hours < 12 ? (
            <h4 className=" fw-light justify-content-end d-none d-md-flex                                  ">{`Bonjour ${
              username.split(' ')[0]
            }`}</h4>
          ) : (
            <h4 className=" fw-light justify-content-end d-none d-md-flex                                  ">{`Bonsoir ${
              username.split(' ')[0]
            }`}</h4>
          )}
        </div>
      ) : null}

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
