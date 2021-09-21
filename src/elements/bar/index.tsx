import React from "react";
import classNames from "classnames";

import * as Style from './style.module.scss';

type BarProps = {
  children: React.ReactElement<BarSectionProps> | React.ReactElement<BarSectionProps>[]
}

export const Bar = ({
  children
}: BarProps) => {
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
    [classNameProp as string]: !!classNameProp
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
