import { Navigation } from 'components/Navigation/Navigation';
import { Logo, Wrapper } from './Header.styled';

export const Header = () => {
  return (
    <Wrapper>
      <Logo>YourLogo</Logo>
      <Navigation />
    </Wrapper>
  );
};
