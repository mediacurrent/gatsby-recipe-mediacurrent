import React from 'react';
import { createHistory, LocationProvider } from '@reach/router';

let history = createHistory(window);

const LocationDecorator = (storyFn) => (
  <LocationProvider history={history}>{storyFn()}</LocationProvider>
);

export default LocationDecorator;
