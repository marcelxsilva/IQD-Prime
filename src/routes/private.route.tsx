import React, { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Storage } from '~/services';
import { Path } from './routes.path';

type Props = {
  render: React.ReactElement;
};

const PrivateRoute: FC<Props> = ({ render }) => {
  const token = Storage.getToken();
  const location = useLocation();

  return token ? (
    render
  ) : (
    <Navigate to={Path.LOGIN} state={{ from: location }} />
  );
};

export default PrivateRoute;
