import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import classNames from 'classnames';

import { Time, GifList, GifImage } from 'helpers';
import { Background, Cover } from 'elements';

import * as Style from './style.module.scss';

const getRandomImage = (gifList: GifList) => {
  const imageIndex = Math.floor(Math.random() * gifList.length);
  return gifList[imageIndex].images.downsized_large;
};

type GifSlideshowProps = {
  gifList: GifList
}

export const GifSlideshow = ({
  gifList
}: GifSlideshowProps) => {
  const timeLabel = Time.getTimeLabel();
  const [currentImage, setCurrentImage] = useState<GifImage>({});

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
      {/* gif background */}
      <Cover zIndex={1} img={currentImage.url} />
    </Background>
  );
}

