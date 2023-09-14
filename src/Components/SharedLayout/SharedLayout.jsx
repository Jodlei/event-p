import styled from "styled-components";
import Header from "../Header/Header";

import Container from "../ui/Container/Container.styled";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
const SharedLayout = () => {
  return (
    <Wrapper>
      <Header />
      <main>
        <Container>
          <Suspense>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
`;

export default SharedLayout;
