import React, { FC } from 'react';
import { TextFieldProps } from '@material-ui/core';
import { Input } from './styles';

type Props = {
  maxLength?: number;
} & TextFieldProps;

const TextField: FC<Props> = ({ label, ...rest }) => (
  <Input
    variant="outlined"
    margin="normal"
    label={label}
    inputProps={{ maxLength: 1 }}
    {...rest}
  />
);

export default TextField;
