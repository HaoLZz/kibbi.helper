import styled from "styled-components";

function App() {
  return (
    <SCAppContainer>
      <header>
        <SCTitle>Generate marketing link for Kibbi Applicant Webapp</SCTitle>
        <a
          href="https://applicant.mykibbi.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"-->"} Kibbi Applicant Webapp
        </a>
      </header>
      <SCMain>
        <SCForm>
          <SCLabel htmlFor="domain">Kibbi Applicant Domain</SCLabel>
          <SCInput
            name="domain"
            id="domain"
            placeholder="Kibbi Applicant Website Address"
          />
          <SCLabel htmlFor="province">Province</SCLabel>
          <SCSelect
            name="province"
            id="province"
            placeholder="Select a province"
          ></SCSelect>
          <SCLabel htmlFor="city">City</SCLabel>
          <SCSelect
            name="city"
            id="city"
            placeholder="Select a city"
          ></SCSelect>
          <SCBtnContainer>
            <SCButton type="submit">Generate</SCButton>
            <SCButton type="reset">Reset</SCButton>
          </SCBtnContainer>
        </SCForm>
      </SCMain>
    </SCAppContainer>
  );
}

const SCAppContainer = styled.div`
  max-width: 1440px;
  margin: 100px auto;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(84, 171, 251, 0.6);
  border-radius: 12px;
`;

const SCTitle = styled.h1`
  text-transform: capitalize;
`;

const SCMain = styled.main`
  margin: 50px 0 0;
  width: 40vw;
  padding: 10px 20px;
  border: 1px black solid;
  border-radius: 8px;
`;

const SCForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SCLabel = styled.label``;

const SCInput = styled.input`
  display: block;
  width: 80%;
  min-height: 30px;
`;

const SCSelect = styled.select`
  width: 50%;
  min-height: 30px;
`;

const SCBtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 15px 0;
`;

const SCButton = styled.button`
  padding: 8px 12px;
  width: 85px;
  border-radius: 8px;
`;

export default App;
