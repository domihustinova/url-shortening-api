import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { ReactComponent as Logo } from "../images/logo.svg";
import { useWindowSize } from "../services/helpers";

import { Dropdown } from "./Dropdown";

const StyledHeader = styled.header`
  max-width: 75rem;
  margin: 0 auto;
  padding: 2.5rem 1.5625rem;

  @media (min-width: 640px) {
    padding: 3rem 2.875rem;
  }
`;

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledNavbarMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 2;
  margin-left: 2.8125rem;
`;

const StyledNavbarMenu = styled.div`
  display: flex;
  align-items: center;
`;

const StyledNavbarItem = styled.a`
  font-size: ${({ theme }) => theme.navbarText};
  margin-right: 1.875rem;
  color: ${({ theme }) => theme.navbarLinkColor};
  text-decoration: none;
  cursor: pointer;
  transition: color 300ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.navbarLinkColorHover};
  }
`;

const StyledNavbarCtaGroup = styled.div``;

const StyledNavbarCtaLink = styled(StyledNavbarItem)`
  margin-right: 2.375rem;
`;

const StyledNavbarCtaButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: ${({ theme }) => theme.navbarText};
  font-weight: 700;
  background: ${({ theme }) => theme.navbarCtaBackground};
  color: ${({ theme }) => theme.navbarCtaColor};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;

const StyledHamburgerIcon = styled.button`
  color: ${({ theme }) => theme.navbarHamburgerColor};
  background-color: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
`;

export function Header() {
  const windowSize = useWindowSize();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isMobile = windowSize.width < 1024;
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <StyledHeader>
      <StyledNavbar>
        <a href="/">
          <Logo title="Shortly" />
        </a>

        {isMobile ? (
          <StyledHamburgerIcon onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faBars} />
          </StyledHamburgerIcon>
        ) : (
          <StyledNavbarMenuWrapper>
            <StyledNavbarMenu>
              <StyledNavbarItem href="#">Features</StyledNavbarItem>
              <StyledNavbarItem href="#">Pricing</StyledNavbarItem>
              <StyledNavbarItem href="#">Resources</StyledNavbarItem>
            </StyledNavbarMenu>
            <StyledNavbarCtaGroup>
              <StyledNavbarCtaLink href="#">Login</StyledNavbarCtaLink>
              <StyledNavbarCtaButton>Sign Up</StyledNavbarCtaButton>
            </StyledNavbarCtaGroup>
          </StyledNavbarMenuWrapper>
        )}
      </StyledNavbar>
      {isMobile && isDropdownOpen && <Dropdown />}
    </StyledHeader>
  );
}
