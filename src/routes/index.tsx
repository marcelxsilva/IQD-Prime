import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Login } from '~/scenes';
import Private from './private.route';
import RouterProvider from './provider';
import Public from './public.route';
import { Path } from './routes.path';

const NavigationApp: FC = () => (
  <Routes>
    <Route path={Path.HOME} element={<Public render={<Home />} />} />
    <Route path={Path.LOGIN} element={<Public render={<Login />} />} />
  </Routes>
);

export { RouterProvider };

export default NavigationApp;
