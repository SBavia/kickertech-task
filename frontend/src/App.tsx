import styled from "styled-components";

import GlobalStyles from "@/GlobalStyles";
import DropdownFilter from "@/components/DropdownFilter";
import BetsTable from "@/components/BetsTable";

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
      <h2>Bets Table</h2>

      <DropdownFilter />

      <BetsTable />

      <GlobalStyles />
    </Container>
  );
}

export default App;
