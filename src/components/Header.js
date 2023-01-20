import React from 'react';
import { Link } from 'react-router-dom';
import Identification from './Identification';
import Search from './Search';

function Header() {
  return (
    <section>
      <div
        style={{
          backgroundColor: '#660766',
          fontFamily:
            "'Sitka Subheading', calibri,Times, 'Times New Roman', Georgia, serif",
        }}
        className="row align-items-center p-1 text-white"
      >
        <div className="col-7 col-lg-4">
          <h1>
            <Link to="/" className="text-white text-decoration-none">
              MyFreeWorks
            </Link>
          </h1>
        </div>

        <div className="col-5 col-lg-8 row">
          <Search />

          <Identification />
        </div>
      </div>
    </section>
  );
}

export default Header;
