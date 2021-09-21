import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import classNames from 'classnames';

import { Time } from 'src/helpers';
import { Background, Cover } from 'src/elements';

import * as Style from './style.module.scss';

const getRandomImage = (gifList) => {
  const imageIndex = Math.floor(Math.random() * gifList.length);
  return gifList[imageIndex].images.downsized_large;
};

export const GifSlideshow = ({
  gifList
}) => {
  const timeLabel = Time.getTimeLabel();
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    if (isEmpty(gifList)) {
      return;
    }

    setCurrentImage(getRandomImage(gifList));
  }, [gifList]);

  useEffect(() => {
    if (isEmpty(gifList)) {
      return;
    }
    setTimeout(() => {
      setCurrentImage(getRandomImage(gifList));
    }, Math.floor(7000 + Math.random() * 6000));
  }, [currentImage]);

  if (isEmpty(gifList) || isEmpty(currentImage)) {
    return (
      <Background>
        <Cover zIndex={1} className={classNames(Style.coverTimeOfDay, Style[timeLabel])} />
      </Background>
    );
  }

  return (
    <Background>
      {/* Time of day cover */}
      <Cover zIndex={2} className={classNames(Style.coverTimeOfDay, Style[timeLabel])} />
      {/* TODO: weather canvas? */}
      {/* gif background */}
      <Cover zIndex={1} img={currentImage.url} />
    </Background>
  );
}

