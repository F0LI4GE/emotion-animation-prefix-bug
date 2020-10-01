import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom'
import { LoadingBox } from './LoadingBox';

/*
  Both LoadingBox animations (from FallbackComponent and HeavyComponent) work fine, animation are there
  when imported like so:
*/
// import HeavyComponent from './HeavyComponent';

/*
  Related to iOS webkit browsers only!
  If imported using "lazy":
  only the first animation from FallbackComponent will start,
  HeavyComponent's loading animation won't start.
*/
const HeavyComponent = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./HeavyComponent')), 3000);
  });
});

const FallbackComponent = () => (
  <div>
    <span>Fallback Component</span>
    <LoadingBox />
  </div>
);

const App = () => (
  <Suspense fallback={<FallbackComponent />}>
    <HeavyComponent />
  </Suspense>
);

ReactDOM.render(<App />, document.getElementById('app'));
