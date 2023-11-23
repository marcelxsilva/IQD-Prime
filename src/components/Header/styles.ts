import { getTheme, pxToRem, styled } from '~/utils';

// Colors
const primaryMain = getTheme('primary.main');
const primaryLight = getTheme('primary.light');

// Spacing
const smallSpacing = getTheme('smallSpacing');

export const Content = styled.div`
  width: 100%;
  height: ${pxToRem(60)};
  background-color: ${primaryMain};
  padding: ${smallSpacing};
`;

export const SectionLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ImgIcon = styled.img.attrs({
  alt: '',
})`
  width: ${pxToRem(150)};
  object-fit: contain;
`;

export const TextProduct = styled.h1`
  margin: 0;
  padding: 0;
  color: ${primaryLight};
  font-size: ${pxToRem(20)};
  padding-left: ${smallSpacing};
  margin-left: ${smallSpacing};
  border-left-width: ${pxToRem(2)};
  border-left-style: ridge;
  border-left-color: ${primaryLight}50;
`;
