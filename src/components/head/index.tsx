import React from 'react';
import { Helmet } from "react-helmet";

export const HeadComponent = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{'The Drunk Weather Channel'} </title>
      {/* <link rel="canonical" href="http://mysite.com/example" /> */}
    </Helmet>
  );
}
