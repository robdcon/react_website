import React, {useState} from 'react';
import { StyledHeader } from './Header.styles';
import Navigation from '../Navigation/Navigation';
import MenuButton from '../MenuButton';

const Header = ({children}) => {
  const [navExpanded, setNavExpanded] = useState(null);
  const toggleNav = () => {
    setNavExpanded(!navExpanded);
  }
  return (
    <StyledHeader className="header">
      <Navigation expanded={navExpanded} />
      <MenuButton action={toggleNav} />
      {children}
    </StyledHeader>
  )
};

export default Header;
