import React from 'react'
import Update from '../../components/Update'

function Modify() {
  const pageTitle = 'Modification :'
  return (
    <React.Fragment>
      <span className="my-3 row justify-content-center">
        <h4>{pageTitle} </h4>
        <Update />
      </span>
    </React.Fragment>
  )
}

export default Modify
