import React from 'react';
import classnames from 'classNames';

import * as Style from './style.module.scss';
import { getTimeLabelFromTime } from '../../helpers/time';

type BackgroundProps = {
  img?: string;
}

// TODO: make backgrounds for each time of day in css

export const Background = ({
  img
}: BackgroundProps) => {
  // TODO: remove this from here
  const timeLabel = getTimeLabelFromTime();
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
