import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import { AppInfo, Chat, Header } from '~/components';
import { Content } from './styles';

type Props = {
  onLogout: () => void;
};

const Home: FC<Props> = ({ onLogout }): JSX.Element => (
  <Content>
    <Header />
    <Chat />
  </Content>
);

export default Home;
