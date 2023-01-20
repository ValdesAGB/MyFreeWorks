import React from 'react';
import { comeUpLink, messageAlert } from '../data';

function FooterIcone({ mapElement }) {
  return (
    <div className="text-center">
      <ul className="list-inline">
        {mapElement.map(({ id, icone }) => (
          <li
            key={id}
            className="list-inline-item mx-sm-5 mx-3"
            title={id}
            onClick={() => alert(messageAlert)}
          >
            <a href={comeUpLink}>
              <i className={icone}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterIcone;
