import React from 'react'
import { dashboard_md_header } from '../data'

function Tableau_md_Header() {
  return (
    <React.Fragment>
      <thead className=" row">
        <tr className="col-12 row text-center">
          {dashboard_md_header.map(({ id, name, title }) => (
            <th scope="col" className="col" key={id} title={title}>
              {name}
            </th>
          ))}
        </tr>
      </thead>
    </React.Fragment>
  )
}

export default Tableau_md_Header
