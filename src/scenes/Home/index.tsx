import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { Path } from '~/routes/routes.path';
import { Storage } from '~/services';
import { useStores } from '~/utils';
import Home from './Home';

const HomeContainer: FC = (): JSX.Element => {
  const { routing } = useStores();

  const onLogout = () => {
    Storage.clearStorage();
    routing.push(Path.LOGIN);
  };

  return <Home onLogout={onLogout} />;
};
export default observer(HomeContainer);
