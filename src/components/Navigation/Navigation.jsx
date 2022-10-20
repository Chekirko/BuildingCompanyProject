import { NavItem, NavList, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavList>
      <NavItem>
        <StyledLink to="/">Home</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="/about">About</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="/portfolio">Portfolio</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="/contacts">Contacts</StyledLink>
      </NavItem>
    </NavList>
  );
};
