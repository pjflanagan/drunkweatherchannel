
import React from 'react';
import { Helmet } from "react-helmet";

const TITLE = 'The Drunk Weather Channel';
const DESCRIPTION = 'The only trusted name in drunk weather';
const KEYWORDS = `drunk, weather, temperature, drinks, channel`;
const ROOT = "https://drunkweatherchannel.flanny.app";

const IMG = `${ROOT}/img/social/social.png`;
const IMG_TW = `${ROOT}/img/social/social-tw.png`;

const AUTHOR = "Peter James Flanagan";
const HANDLE = "@peterjflan";

export const HeadComponent = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />

      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta name="author" content={AUTHOR} />
      <meta name="keywords" content={KEYWORDS} />

      {/* <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /> */}

      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content={IMG} />
      <meta property="og:url" content={ROOT} />
      <meta property="og:type" content="website" />
      <meta property="og:image:secure_url" content={IMG} />

      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={HANDLE} />
      <meta name="twitter:creator" content={HANDLE} />
      <meta name="twitter:image" content={IMG_TW} />
    </Helmet>
  );
}
