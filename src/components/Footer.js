import React from 'react';
import { date, networks, siteName } from '../data';
import { colors } from '../untils';
import FooterIcone from './FooterIcone';

function Footer() {
  return (
    <footer>
      <div
        style={{ backgroundColor: colors.menuBackgroung }}
        className="row pt-3"
      >
        <div className=" text-center text-white mb-2">
          <h5 className=" fw-light">
            {siteName} &copy; {date.getFullYear(0)}
          </h5>
        </div>
        <FooterIcone mapElement={networks} />
      </div>
    </footer>
  );
}

export default Footer;
