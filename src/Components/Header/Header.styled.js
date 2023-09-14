import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderBlock = styled.header`
  position: absolute;
  background-color: ${(p) => p.theme.colors.headerBackground};
`;

export const HeaderElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  padding-top: 18px;

  @media screen and (min-width: 768px) {
    padding-top: 19px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 18px;
  }
`;

export const LogoWrap = styled.div``;

export const LogoLink = styled(NavLink)``;
