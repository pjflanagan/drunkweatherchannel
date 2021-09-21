import React from 'react';
import classNames from 'classnames';

import * as Style from './style.module.scss';

type BackgroundProps = {
  children: React.ReactElement<CoverProps> | React.ReactElement<CoverProps>[]
}

export const Background = ({
  children
}: BackgroundProps) => {
  return (
    <div className={Style.background}>
      {children}
    </div>
  )
};

type CoverProps = {
  img?: string;
  className?: string;
  zIndex: number
}

export const Cover = ({
  img,
  className: classNameProp,
  zIndex,
}: CoverProps) => {
  const className = classNames(Style.cover, classNameProp);
  const style = !!img ? {
    backgroundImage: `url(${img})`,
    zIndex
  } : { zIndex };
  return (
    <div
      className={className}
      style={style}
    />
  );
};
