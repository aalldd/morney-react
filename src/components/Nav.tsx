import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0,0,0,.25);
  >ul{
    width: 100%;
    display: flex;
    >li{
      width: 33.33%;
      padding: 16px;
      color: #000;
      .icon{
        width: 24px;
        height: 24px;
        margin-bottom: 4px;
      }
      a{
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/tags">
            <Icon name="tag"/>
            标签页
          </Link>
        </li>
        <li>
          <Link to="/money">
            <Icon name="money"/>
            记账页
          </Link>
        </li>
        <li>
          <Link to="/statistics">
            <Icon name="chart"/>统计页
          </Link>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;
