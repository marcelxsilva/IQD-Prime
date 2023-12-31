import React, { useLayoutEffect, useState } from 'react';
import { BrowserHistory } from 'history';
import { Router } from 'react-router-dom';

type Props = {
  routing: BrowserHistory;
  children: React.ReactNode;
};

const RouterProvider: React.FC<Props> = ({ routing, children, ...props }) => {
  const { location, action } = routing;
  const [state, setState] = useState({ location, action });

  useLayoutEffect(() => routing.listen(setState), [routing]);

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={routing}
    >
      {children}
    </Router>
  );
};

export default RouterProvider;
