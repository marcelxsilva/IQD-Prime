import React, { FC } from 'react';
import { Chat, Header } from '~/components';
import { Content } from './styles';

const Home: FC = (): JSX.Element => (
  <Content>
    <Header />
    <Chat />
  </Content>
);

export default Home;
