import React from 'react';

import * as Style from './style.module.scss';

export const Container = ({
  children
}) => {
  return (
    <div
      className={Style.container}
    >
      {children}
    </div>
  )
};
