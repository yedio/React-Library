import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  const navigate = useNavigate();
  return (
    <NavWrapper>
      <Logo onClick={() => navigate('/')}>🍋</Logo>
    </NavWrapper>
  );
}

const NavWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background-color: lightgray;
`;

const Logo = styled.div`
  font-size: 30px;
  cursor: pointer;
`;
