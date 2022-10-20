import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #101aa4;
  font-size: 25px;
  text-decoration: none;

  &:hover {
    color: white;
  }

  /* &.active {
    color: pink;
  } */
`;

export const NavList = styled.ul`
  margin: 0;
  margin-left: auto;
  display: flex;
`;

export const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;
