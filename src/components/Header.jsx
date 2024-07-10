import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.secondary};
`;

const Logo = styled.img`
  width: 120px;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.text)};
  padding: 0.5rem;
  border-bottom: ${({ $active, theme }) => ($active ? `2px solid ${theme.colors.primary}` : 'none')};
`;

const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <Logo src={logo} alt="AluraFlix" />
      <NavLinks>
        <NavLink to="/" $active={location.pathname === '/'}>Home</NavLink>
        <NavLink to="/novo-video" $active={location.pathname === '/novo-video'}>Novo Vídeo</NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
