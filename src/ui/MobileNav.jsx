import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineHome,
  HiOutlineCalendarDays,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

const StyledNav = styled.nav`
  background-color: var(--color-grey-100);
  max-width: 100vw;
  z-index: 100;
  left: 0;
  top: 8rem;
  right: 0;
  position: absolute;
`;

const NavList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  display: inline-block;
  width: 100%;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-300);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }

  @media (min-width: 250px) {
    flex-direction: column;
  }

  @media (min-width: 550px) {
    flex-direction: row;
  }
`;

function MobileNav({ handleMobileNavClose }) {
  return (
    <StyledNav>
      <NavList>
        <li onClick={() => handleMobileNavClose(false)}>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li onClick={() => handleMobileNavClose(false)}>
          <StyledNavLink to="/bookings">
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </StyledNavLink>
        </li>
        <li onClick={() => handleMobileNavClose(false)}>
          <StyledNavLink to="/cabins">
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </StyledNavLink>
        </li>
        <li onClick={() => handleMobileNavClose(false)}>
          <StyledNavLink to="/users">
            <HiOutlineUsers />
            <span>Users</span>
          </StyledNavLink>
        </li>
        <li onClick={() => handleMobileNavClose(false)}>
          <StyledNavLink to="/settings">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </StyledNav>
  );
}

export default MobileNav;
