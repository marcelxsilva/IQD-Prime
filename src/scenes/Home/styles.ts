import { getTheme, styled } from '~/utils';

const primaryDark = getTheme('primary.dark');

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${primaryDark};
`;
