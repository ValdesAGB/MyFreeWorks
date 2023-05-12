import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext, cookie } from '../untils/context'

function StateAccount() {
  const { userId } = useContext(UserContext)
  const id = userId && userId.userId
  const accountState = userId && userId.stateAccount
  const pathActuel = window.location.pathname

  return (
    <React.Fragment>
      {cookie && !accountState && pathActuel !== `/confirmaccount/${id}` && (
        <section className="bg-warning row">
          <h5 className="text-center my-auto fw-light">
            Veuillez activer votre compte{' '}
            <Link to={`/confirmaccount/${id}`}>ici</Link>.
          </h5>
        </section>
      )}
    </React.Fragment>
  )
}

export default StateAccount
