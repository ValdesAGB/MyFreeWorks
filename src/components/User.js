import React from 'react'
import { Link, useParams } from 'react-router-dom'

function User() {
  //  ici on devrait pas avoir const { id } = useParams(). L'id serait plutôt récupérer depuis le UserContext, c'est-à-dire les données renvoyées par le backend.
  const { id } = useParams()
  return (
    <React.Fragment>
      <div>
        <div className="btn col"></div>
        <Link
          to={`/dashboard/${id}`}
          className="text-white text-decoration-none"
        >
          Name
        </Link>
      </div>
    </React.Fragment>
  )
}

export default User
