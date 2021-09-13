import React from 'react';
import classnames from 'classnames';

import { Time } from '../../helpers/time';

import * as Style from './style.module.scss';

type BackgroundProps = {
  img?: string;
  cover?: boolean;
  className?: string;
}

// TODO: make backgrounds for each time of day in css

export const Background = ({
  img,
  cover,
  className,
}: BackgroundProps) => {
  // TODO: remove this from here, and move to the 
  const timeLabel = Time.getTimeLabel();
  // const finalClassName = classnames(Style.background, {
  //   [Style.cover]: cover,
  //   [className]: !!className
  // });
  return (
    <>
      <div
        className={classnames(Style.background, Style.cover, Style[timeLabel])}
      />
      <div
        className={Style.background}
        style={{
          backgroundImage: `url(${img})`
        }}
      />
    </>
  );
};
