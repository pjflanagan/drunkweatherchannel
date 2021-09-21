import React, { FC } from "react";

import { MainComponent, HeadComponent } from 'components';

import './reset.scss';
import './style.scss';

const PageIndex: FC = () => {
  return (
    <>
      <HeadComponent />
      <MainComponent />
    </>
  );
}

export default PageIndex;
