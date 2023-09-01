import { styled } from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";
import { useEffect, useState } from "react";
import { GiHamburgerMenu as HamburgerClose } from "react-icons/gi";
import { RxCross2 as HamburgerOpen } from "react-icons/rx";
import Heading from "./Heading";
import Row from "./Row";
import MobileNav from "./MobileNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);

  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-800);
    transition: all 0.3s;
  }

  @media (min-width: 250px) {
    padding: 2rem 2.4rem;
  }

  @media (min-width: 550px) {
    padding: 3.2rem 2.4rem;
  }
`;

const StyledMobileNav = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

function Sidebar() {
  const [width, setWidth] = useState(window.innerWidth);
  const sidebarOpen = !(width < 550);

  const [hamburgerButtonOpen, setHamburgerButtonOpen] = useState(false);

  function handleHamburgerButton() {
    setHamburgerButtonOpen((s) => !s);
  }

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <StyledSidebar>
      {sidebarOpen && (
        <>
          <Logo />
          <MainNav />
          <Uploader />
        </>
      )}

      {!sidebarOpen && !hamburgerButtonOpen && (
        <StyledMobileNav>
          <div style={{ display: "flex", gap: "2rem" }}>
            <Logo />
            <Heading as="h1">The Wild Oasis</Heading>
          </div>
          <HamburgerClose onClick={handleHamburgerButton} />
        </StyledMobileNav>
      )}
      {!sidebarOpen && hamburgerButtonOpen && (
        <StyledMobileNav>
          <Row type={"vertical"} style={{ width: "100vw" }}>
            <Row
              type={"horizontal"}
              style={{ justifyContent: "space-between", gap: "2rem" }}
            >
              <div style={{ display: "flex", gap: "2rem" }}>
                <Logo />
                <Heading as="h1">The Wild Oasis</Heading>
              </div>
              <HamburgerOpen onClick={handleHamburgerButton} />
            </Row>
            <MobileNav handleMobileNavClose={setHamburgerButtonOpen} />
          </Row>
        </StyledMobileNav>
      )}
    </StyledSidebar>
  );
}

export default Sidebar;
