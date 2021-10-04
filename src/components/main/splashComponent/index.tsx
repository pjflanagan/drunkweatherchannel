import React, { useEffect, useState } from "react";
import classNames from "classnames";

import Logo from 'images/icon.png'; // TODO: use the small logo
import { getRandomPhraseFromSection, slogan as sloganSection } from 'content';
import { useGeneratedPhrase } from "hooks";

import * as Style from './style.module.scss';

export const SplashComponent = () => {

  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [slogan] = useGeneratedPhrase(
    '',
    () => getRandomPhraseFromSection(sloganSection),
    []
  );

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 1800);
  }, []);

  const className = classNames(Style.splash, {
    [Style.closed]: !isOpen
  })

  return (
    <div className={className}>
      <div className={Style.content}>
        <img className={Style.logo} src={Logo} />
        <div className={Style.slogan}>{slogan}</div>
      </div>
    </div>
  );
}