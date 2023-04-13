import React from 'react'
import { Link } from 'react-router-dom'
import { siteName } from '../data'
import { colors, police } from '../untils'
import Identification from './Identification'
import Search from './Search'

function Header() {
  return (
    <section>
      <div
        style={{
          backgroundColor: colors.headerBackground,
          fontFamily: police.ff1,
        }}
        className="row align-items-center p-1 text-white"
      >
        <div className="col-7 col-lg-4">
          <h1>
            <Link to="/MyFreeWorks" className="text-white text-decoration-none">
              {siteName}
            </Link>
          </h1>
        </div>

        <div className="col-5 col-lg-8 row">
          <Search />
          <Identification />
        </div>
      </div>
    </section>
  )
}

export default Header
