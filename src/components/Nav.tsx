import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
require('icons/money.svg')
require('icons/chart.svg')
require('icons/tag.svg')

const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0,0,0,.25);
  >ul{
    width: 100%;
    display: flex;
    >li{
      width: 33.33%;
      padding: 16px;
      color: #000;
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon{
        width: 24px;
        height: 24px;
        margin-bottom: 4px;
      }
    }
  }
`;
const Nav=()=>{
  return(
    <NavWrapper>
      <ul>
        <li>
          <svg className="icon">
            <use xlinkHref="#tag"/>
          </svg>
          <Link to="/tags">标签页</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#money"/>
          </svg>
          <Link to="/money">记账页</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#chart"/>
          </svg>
          <Link to="/statistics">统计页</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}
export default Nav
