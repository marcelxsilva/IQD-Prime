import React from 'react';
import { MobXProviderContext } from 'mobx-react';
import { RouterStore } from 'mobx-react-router';
import store from '~/stores';

type Routing = {
  routing: RouterStore;
};

export const useStores = (): typeof store & Routing => {
  const { root } = React.useContext(MobXProviderContext);
  return root;
};
