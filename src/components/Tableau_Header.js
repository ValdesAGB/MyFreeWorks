import React from 'react'
import { dashboard_header } from '../data'

function Tableau_Header() {
  return (
    <React.Fragment>
      <thead className="row">
        <tr className="col row text-center">
          {dashboard_header.map(({ id, title }) => (
            <th scope="col-3" className="col" key={id}>
              {title}
            </th>
          ))}
        </tr>
      </thead>
    </React.Fragment>
  )
}

export default Tableau_Header
