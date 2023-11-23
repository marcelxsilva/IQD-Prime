import React, { FC } from 'react';
import { primeIMG } from '~/assets/img';
import { Content, ImgIcon, SectionLogo, TextProduct } from './styles';

type Props = {};

const Header: FC<Props> = () => (
  <Content>
    <SectionLogo>
      <ImgIcon src={primeIMG} alt="" />
      <TextProduct>IQD</TextProduct>
    </SectionLogo>
  </Content>
);

export default Header;
