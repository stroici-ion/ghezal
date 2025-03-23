import React from 'react';
import { Provider } from 'react-redux';

import styles from './styles.module.scss';
import { router } from '../routes';
import { RouterProvider } from 'react-router-dom';
import store from '../redux';

function App() {
  return (
    <div className={styles.root}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
