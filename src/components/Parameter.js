import React from 'react'
import UserInfos from './UserInfos'
import { Link, useParams } from 'react-router-dom'

function Parameter() {
  const { id } = useParams()
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#parameters"
      >
        Paramètres
      </button>

      <div
        className="modal fade"
        id="parameters"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered text-start">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Vos informations
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <UserInfos id={id} />
            </div>
            <div className="modal-footer">
              <Link to={`/user/update/${id}`}>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Modifier mes informations
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Parameter
