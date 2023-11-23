/* eslint-disable react/button-has-type */
import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import { AppInfo } from '~/components';

type Props = {
  onHome: () => void;
};

const Login: FC<Props> = ({ onHome }): JSX.Element => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto',
      width: 'auto',
    }}
  >
    <Button variant="outlined" onClick={onHome}>
      Acessar Area Privada
    </Button>
    <AppInfo />
  </div>
);

export default Login;
