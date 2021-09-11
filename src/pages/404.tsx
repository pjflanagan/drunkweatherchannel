import React, { FC, useEffect } from "react"

// TODO: this page needs to say: "You're drunk, 404! Let's get you to where you need to go buddy"

const Page404: FC = () => {
  useEffect(() => {
    window.location.replace('/');
  });
  return null;
};

export default Page404;
