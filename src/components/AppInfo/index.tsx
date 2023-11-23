/* eslint-disable react/function-component-definition */
import React, { FC } from 'react';
import { Typography } from '~/components';
import { REACT_APP_ENV } from '~/utils';
import pkg from '../../../package.json';
import { Content, Text } from './styles';

type Props = {};

const AppInfo: FC<Props> = () => (
  <Content>
    <Typography>
      v{pkg.version} - {REACT_APP_ENV}
    </Typography>
  </Content>
);

export default AppInfo;
