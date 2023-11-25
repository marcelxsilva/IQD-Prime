import React, { FC } from 'react';
import { observer } from 'mobx-react';
import Home from './Home';

const HomeContainer: FC = (): JSX.Element => <Home />;
export default observer(HomeContainer);
