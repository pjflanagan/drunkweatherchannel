import React from 'react';

import Logo from 'images/icon.png';
import * as Style from './style.module.scss';

export const Header = () => {
  return (
    <div className={Style.header}>
      <img src={Logo} />
    </div>
  )
};
