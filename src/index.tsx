import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import '~/utils/config/reactotron';
import { createBrowserHistory } from 'history';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { CssBaseline } from '@material-ui/core';
import Routes, { RouterProvider } from '~/routes';
import store from '~/stores';
import { breakpoints, colors, radius, spacings } from '~/theme';
import { Toastify } from './utils/modules';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const routing = syncHistoryWithStore(browserHistory, routingStore);

const stores = { ...store, routing };

const theme = {
  ...colors,
  ...spacings,
  ...radius,
  ...breakpoints,
};

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider {...stores} root={stores}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider routing={routing}>
          <Toastify.ToastContainer />
          <Routes />
        </RouterProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
