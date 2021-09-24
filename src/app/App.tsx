import React from 'react';
import type { FunctionComponent } from 'react';
import { rootStore } from '../models';
import { Store } from '../store';
import { Router } from '../router';

const App: FunctionComponent = () => {
  return (
    <Store.Provider value={rootStore}>
      <Router navigation={<></>} />
    </Store.Provider>
  );
};

export {
  App
};
