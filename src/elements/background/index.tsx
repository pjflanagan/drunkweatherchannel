import React from 'react';
import classNames from 'classnames';

import { Time } from 'src/helpers';

import * as Style from './style.module.scss';

type BackgroundProps = {
  img?: string;
  cover?: boolean;
  className?: string;
}

// TODO: make backgrounds for each time of day in css
// in an upper level

export const Background = ({
  img,
  zIndex,
  className,
}: BackgroundProps) => {
  // TODO: remove this from here, and move to the 
  const timeLabel = Time.getTimeLabel();
  // const finalClassName = classNames(Style.background, {
  //   [Style.cover]: cover,
  //   [className]: !!className
  // });
  return (
    <>
      <div
        className={classNames(Style.background, Style.cover, Style[timeLabel])}
      />
      <div
        className={Style.background}
        style={{
          backgroundImage: `url(${img})`,
          zIndex
        }}
      />
    </>
  );
};
