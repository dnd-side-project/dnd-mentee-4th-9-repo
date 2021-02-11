/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import Section, {NAV} from '../Section';
import {useLocation, Link} from 'react-router-dom';

const menuList = [
  {name: '테스트', path: '/test-start'},
  {name: '식물도감', path: '/plants'},
  {name: '정기구독', path: '/subscription'},
];

function Nav() {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  const toggleMenuList = () => setIsActive(!isActive);
  const bgColor = location.pathname === '/' || location.pathname === '/test-start' ? 'rgba(140, 210, 156, 0.5)' : 'lightGreen';

  return (
    <Section width="lg" bgColor={bgColor} type={NAV}>
      <LeftWrapper to="/">
        <LogoImage src={`${process.env.PUBLIC_URL}/images/logo_nav.svg`} alt="See-at logo" />
      </LeftWrapper>
      <RightWrapper>
        <MenuWrapper isActive={isActive}>
          {menuList.map(({name, path}) => (
            <MenuList isActive={isActive} key={name}>
              <Menu to={path} onClick={toggleMenuList}>
                {name}
              </Menu>
            </MenuList>
          ))}
        </MenuWrapper>
        <MenuBar onClick={toggleMenuList} imgUrl={`${process.env.PUBLIC_URL}/images/hamburger.svg`} />
      </RightWrapper>
    </Section>
  );
}

const LeftWrapper = styled(Link)`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const LogoImage = styled.img`
  width: 77px;
  height: 15px;
  color: ${({theme}) => theme.colors.white};
  display: flex;
  align-items: center;
`;

const RightWrapper = styled.ul`
  display: flex;
  align-items: center;
  @media ${({theme}) => theme.devices.md} {
    ${({isActive}) => {
      if (!isActive) return;
      return css`
        position: absolute;
      `;
    }}
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media ${({theme}) => theme.devices.md} {
    ${({isActive}) => {
      if (!isActive) return;
      return css`
        flex-direction: column;
        width: 100px;
        position: relative;
        top: 115px;
        right: -40px;
      `;
    }}
  }
`;

const MenuList = styled.li`
  margin-left: 99px;
  &:hover {
    cursor: pointer;
  }

  @media ${({theme}) => theme.devices.md} {
    display: none;
    ${({isActive}) => {
      if (!isActive) return;
      return css`
        display: block;
        height: 56px;
        padding: 10px;
        margin: 0;
        line-height: 36px;
        background-color: ${({theme}) => theme.colors.lightGreen};
        &:hover {
          background-color: rgba(140, 210, 156, 0.7);
        }
      `;
    }}
  }
`;

const Menu = styled(Link)`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${({theme}) => theme.colors.white};
`;

const MenuBar = styled.a`
  display: none;

  &:before {
    content: url(${({imgUrl}) => imgUrl});
  }

  @media ${({theme}) => theme.devices.md} {
    display: block;
  }
`;

export default Nav;
