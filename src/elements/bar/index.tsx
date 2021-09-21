import React from "react";
import classNames from "classnames";

import * as Style from './style.module.scss';

export const Bar = ({
  children
}) => {
  return (
    <div className={Style.bar}>
      {children}
    </div>
  );
}

type BarSectionProps = {
  onClick?: () => void;
  className?: string;
  children: string | JSX.Element | JSX.Element[]
}

export const BarSection = ({
  onClick,
  className: classNameProp,
  children
}: BarSectionProps) => {
  const className = classNames(Style.section, {
    [Style.button]: !!onClick,
    [classNameProp]: !!classNameProp
  });
  return (
    <div
      className={className}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
