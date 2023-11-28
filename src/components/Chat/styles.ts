import { getTheme, ifStyle, pxToRem, styled } from '~/utils';

// spacings
const mediumSpacing = getTheme('mediumSpacing');
const smallSpacing = getTheme('smallSpacing');
const largeSpacing = getTheme('largeSpacing');

// Colors
const primaryContrast = getTheme('primary.contrast');
const secondaryMain = getTheme('secondary.main');
const primaryLight = getTheme('primary.light');
const secondaryLight = getTheme('secondary.light');
const primaryDark = getTheme('primary.dark');

// radius
const smallRadius = getTheme('smallRadius');

// ifs
const isLeft = ifStyle('left');

export const Section = styled.div`
  position: absolute;
  right: ${largeSpacing};
  bottom: ${largeSpacing};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const ChatView = styled.div`
  width: ${pxToRem(500)};
  height: 100%;
  padding: ${mediumSpacing};
  background-color: ${primaryContrast};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const NameChat = styled.h3`
  color: ${primaryLight};
  padding-bottom: ${smallSpacing};
  font-weight: 400;
`;

export const SectionMessage = styled.div`
  width: 100%;
  height: 75%;
  border-top-width: ${pxToRem(1)};
  border-top-style: solid;
  border-top-color: ${secondaryLight};
  overflow-y: auto;

  display: flex;
  flex-direction: column;
`;

type BubbleProps = {
  left?: boolean;
};

export const SectionBubble = styled.div<BubbleProps>`
  width: 100%;
  display: flex;
  justify-content: ${isLeft('flex-start', 'flex-end')};
`;

export const Bubble = styled.div<BubbleProps>`
  min-width: 30%;
  max-width: 70%;
  min-height: ${pxToRem(30)};
  background-color: ${isLeft(secondaryMain, primaryDark)};
  margin: 10px;
  border-radius: ${smallRadius};
  padding: ${smallSpacing};
  color: ${primaryLight};
  font-size: ${pxToRem(15)};
`;

export const SectionTextField = styled.div`
  width: 100%;
  height: ${pxToRem(50)};
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  bottom: 0px;
`;

export const TextField = styled.textarea`
  width: 90%;
  height: ${pxToRem(50)};
  border-radius: ${smallRadius};
  border: 0;
  padding: ${smallSpacing};

  :focus {
    outline: none;
  }
`;

export const ImageIcon = styled.img`
  object-fit: cover;
  width: ${pxToRem(75)};
  height: ${pxToRem(75)};
  border-radius: ${pxToRem(200)};
  animation: pulse 1s linear infinite;

  @-webkit-keyframes pulse {
    0% {
      -webkit-transform: scale(0.99);
      transform: scale(0.99);
    }

    50% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    100% {
      -webkit-transform: scale(0.99);
      transform: scale(0.99);
    }
  }
`;
