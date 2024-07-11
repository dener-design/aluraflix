import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.secondary};
  
  max-width: 100%;
  position: relative;
  bottom: 0;
`;

const Logo = styled.img`
  width: 120px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Link to="/">
        <Logo src={logo} alt="AluraFlix" />
      </Link>
    </FooterContainer>
  );
};

export default Footer;
