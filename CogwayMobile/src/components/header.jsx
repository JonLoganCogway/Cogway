import React from 'react';
import styled from 'styled-components/native';
import { mainColor } from '../resources/colors';

const Container = styled.View`
  align-items: center;  
  background-color: ${mainColor};
  height: 140px;
  padding-top: 80px;
  width: 100%;
`;

const Image = styled.Image`
  width: 200px;
  height: 52px;
`;

const Header = (props) => {
  return (
    <Container>
      <Image source={require('../../assets/logo.png')} />
    </Container>
  )
}

export default Header;