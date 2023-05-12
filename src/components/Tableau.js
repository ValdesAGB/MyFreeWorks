import React from 'react'
import Tableau_md_Body from './Tableau_md_Body'
import Tableau_md_Header from './Tableau_md_Header'
import Tableau_Header from './Tableau_Header'
import Tableau_Body from './Tableau_Body'

function Tableau() {
  return (
    <React.Fragment>
      <table className="table d-none d-sm-block">
        <Tableau_md_Header />
        <Tableau_md_Body />
      </table>
      <table className="table d-block d-sm-none ">
        <Tableau_Header />
        <Tableau_Body />
      </table>
    </React.Fragment>
  )
}

export default Tableau
