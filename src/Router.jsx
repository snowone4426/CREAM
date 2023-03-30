import styled from "styled-components";
import { Route, Routes } from "react-router";

import Main from "./pages/Main";
import { Nav } from "./components";

export default function Router() {
  return (
    <RouterContainer>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </RouterContainer>
  );
}

const RouterContainer = styled.div``;
