import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../untils/context'

function User() {
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
