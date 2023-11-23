import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import { AppInfo } from '~/components';

type Props = {
  onLogout: () => void;
};

const Home: FC<Props> = ({ onLogout }): JSX.Element => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto',
      width: 'auto',
    }}
  >
    <Button variant="contained" onClick={onLogout}>
      Sair da Area Privada
    </Button>
    <AppInfo />
  </div>
);

export default Home;
