import React, { useContext } from 'react'
import Connexion from './Connexion'
import Registration from './Registration'
import User from './User'
import Cart from './Cart'
import { userIcone } from '../data'
import { UserContext } from '../untils/context'

function Identification() {
  const { user } = useContext(UserContext)
  return (
    <div className="col-lg-5 col row offset-1 navbar navbar-expand-md">
      {user ? (
        <>
          {userIcone.connect}
          <span className="collapse navbar-collapse" id="navbar">
            <Cart />
            <User />
          </span>
          <span className="collapse navbar-collapse" id="navbar">
            <Connexion />
            <Registration />
          </span>
        </>
      ) : (
        <>
          {userIcone.disconnect}
          <span className="collapse navbar-collapse" id="navbar">
            <Connexion />
            <Registration />
          </span>
        </>
      )}
    </div>
  )
}

export default Identification
