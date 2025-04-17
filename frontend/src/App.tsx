import styled from "styled-components";

import GlobalStyles from "@/GlobalStyles";

const Container = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin: auto;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

function App() {
  return (
    <Container>
      <GlobalStyles />
    </Container>
  );
}

export default App;
