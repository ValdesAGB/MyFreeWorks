import React from 'react';
import { networks } from '../data';
import { colors } from '../untils';

function Footer() {
  let date = new Date();

  return (
    <footer>
      <div
        style={{ backgroundColor: colors.menuBackgroung }}
        className="row pt-3"
      >
        <div className=" text-center text-white mb-2">
          <h5 className=" fw-light">
            MyFreeWorks &copy; {date.getFullYear(0)}{' '}
          </h5>
        </div>
        <div className="text-center">
          <ul className="list-inline">
            {networks.map(({ id, icone, link }) => (
              <li
                key={id}
                className="list-inline-item mx-sm-5 mx-3"
                title={id}
                onClick={() =>
                  alert(
                    "Vous serez rediriger vers le profil ComeUp du concepteur de ce site où vous pourrez discuter avec lui de vos besoins ou projets. Ne vous en faite pas, c'est totalement gratuit 😁."
                  )
                }
              >
                <a href={link}>
                  <i className={icone}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
