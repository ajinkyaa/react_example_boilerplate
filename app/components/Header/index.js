import React from 'react';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink'
import LeftList from '../LeftList'
import RightList from '../RightList'
import ClearFix from '../ClearFix'

class Header extends React.Component { 
  render() {
    return (
      <NavBar>
        <LeftList>
          <HeaderLink to="/">
            Home
          </HeaderLink>
        </LeftList>
        <RightList>
          <HeaderLink to="/features">
            Feature
          </HeaderLink>
        </RightList>
        <ClearFix />
      </NavBar>
    );
  }
}

export default Header;