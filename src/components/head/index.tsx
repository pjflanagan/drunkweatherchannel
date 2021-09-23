import React from 'react';
import { Helmet } from "react-helmet";

export const HeadComponent = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0" />

      <meta name="description" content="The Drunk Weather Channel" />
      <meta name="keywords" content="drunk, weather, temperature, drinks, channel" />

      {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}

      {/* <!-- ios -->
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/img/logo192.png" />
      <!-- <link rel="apple-touch-icon" sizes="57x57" href="//img/icon-57.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="//img/icon-72.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="//img/icon-114.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="//icon-144.png" /> --> */}

      {/* <!-- facebook -->
      <meta property="og:url" content="http://app.bamboolearn.com">
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Bamboo Learn" />
      <meta property="og:description" content="Learn Mandarin with this helpful Chrome Extension!" />
      <meta property="og:image" content="%PUBLIC_URL%/img/social-media-fb.png" /> */}

      {/* <meta name="twitter:site"           content="@" />
      <meta name="twitter:creator" 		content="@"
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:title" content="Bamboo Learn" />
      <meta name="twitter:description" content="Learn Mandarin with this helpful Chrome Extension!" />
      <meta name="twitter:image:src" content="%PUBLIC_URL%/img/social-media-tw.png" /> */}

      <title>{'The Drunk Weather Channel'} </title>
    </Helmet>
  );
}
