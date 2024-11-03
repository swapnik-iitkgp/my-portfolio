// src/App.js

import React, { Suspense, lazy } from 'react';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Loader from './components/Loader/Loader';

const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const Home = lazy(() => import('./components/Home/Home'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <ScrollToTop />
      <Navbar />
      <main>
        <Home />
      </main>
    </Suspense>
  );
}

export default App;
