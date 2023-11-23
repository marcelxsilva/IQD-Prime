import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { getTheme, pxToRem } from '~/utils';

const primaryMain = getTheme('primary.main');

export const Input = styled(TextField)`
  & label {
    font-size: 1em;
  }
  & .MuiOutlinedInput-root {
    height: ${pxToRem(55)};
    background: ${primaryMain};
  }
  &.MuiInputBase-root {
  }
`;
