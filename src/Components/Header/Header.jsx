import {
  HeaderBlock,
  HeaderElement,
  LogoWrap,
  LogoLink,
} from "./Header.styled";
// import { useMediaQuery } from "@mui/material";
// import { useState } from "react";
import Container from "../ui/Container/Container.styled";

// import Modal from "../../Components/ui/Modal/Modal";

const Header = () => {
  // const [menu, setMenu] = useState(false);

  // const isMobileTablet = useMediaQuery("(max-width: 1439px)");

  // const toggleModal = () => {
  //   setMenu(!menu);
  // };

  return (
    <HeaderBlock>
      <Container>
        <HeaderElement>
          <LogoWrap>
            <LogoLink to="/main"></LogoLink>
            123
          </LogoWrap>
        </HeaderElement>
      </Container>
    </HeaderBlock>
  );
};

export default Header;
