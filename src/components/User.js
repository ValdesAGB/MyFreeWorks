import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { UserContext } from '../untils/context'

function User() {
  //  ici on devrait pas avoir const { id } = useParams(). L'id serait plutôt récupérer depuis le UserContext, c'est-à-dire les données renvoyées par le backend.

  const { userId } = useContext(UserContext)
  return (
    <React.Fragment>
      <Link
        to={`/dashboard/${userId && userId.userId}`}
        className="text-white text-decoration-none col"
      >
        Dashboard
      </Link>
    </React.Fragment>
  )
}

export default User
