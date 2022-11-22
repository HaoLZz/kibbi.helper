import styled from "styled-components";

function App() {
  return (
    <SCAppContainer>
      <header>
        <p></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </SCAppContainer>
  );
}

const SCAppContainer = styled.div`
  max-width: 1440px;
  margin: 100px auto;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
