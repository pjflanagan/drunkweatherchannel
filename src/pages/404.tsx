import React, { FC, useEffect } from "react"

const Page404: FC = () => {
  useEffect(() => {
    window.location.replace('/');
  });
  return null;
};

export default Page404;
