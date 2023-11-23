import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { Storage } from '~/services';
import { Path } from './routes.path';

type Props = {
  render: React.ReactElement;
};

const PrivateRoute: FC<Props> = ({ render }) => {
  const token = Storage.getToken();
  return token ? <Navigate to={Path.HOME} /> : render;
};

export default PrivateRoute;
