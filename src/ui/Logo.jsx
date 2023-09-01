import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  width: auto;

  @media (min-width: 250px) {
    height: 3rem;
    margin-top: 8px;
  }

  @media (min-width: 550px) {
    height: 9.6rem;
  }
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
