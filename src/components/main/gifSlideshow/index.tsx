import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';

import { Background } from 'src/elements';

const getRandomImage = (gifList) => {
  const imageIndex = Math.floor(Math.random() * gifList.length);
  return gifList[imageIndex].images.downsized_large;
};

export const GifSlideshow = ({
  gifList
}) => {
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
      // TODO: Background show display gif, temperature, and time of day
      // using 3 different backgrounds, data should be out here
      // the element should not calculate anything
      <Background />
    );
  }

  return (
    <Background img={currentImage.url} />
  )
}