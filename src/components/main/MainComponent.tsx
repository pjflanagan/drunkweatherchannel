import React, { FC } from 'react';

import { useCoordinates } from '../../hooks';

const MainComponent: FC = () => {
  const coords = useCoordinates();

  // if coords are null then show screen for request for location

  // otherwise show weather screen

  return (
    <main>
      Hello: {JSON.stringify(coords)}
    </main>
  )
}


export { MainComponent }