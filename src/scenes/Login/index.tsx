import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { Path } from '~/routes/routes.path';
import { Storage } from '~/services';
import { useStores } from '~/utils';
import Login from './Login';

const LoginContainer: FC = (): JSX.Element => {
  const { routing } = useStores();

  const onHome = () => {
    Storage.setToken('token');
    routing.push(Path.HOME);
  };

  return <Login onHome={onHome} />;
};

export default observer(LoginContainer);
