import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { CA_UNIT_CITY, CA_UNIT_STATE } from "./enum";
import { isValidURL, writeToClipboard } from "./helper";

const provinces = ["", ...CA_UNIT_STATE];
const DEFAULT_DOMAIN = "https://applicant.mykibbi.com/";

function App() {
  const [domain, setDomain] = useState(DEFAULT_DOMAIN);
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");

  const [cities, setCities] = useState<string[]>([]);

  const [link, setLink] = useState("");

  const handleDomainChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDomain(e.target.value);
    },
    []
  );

  const handleProvinceChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const province = e.target.value;
      if (!!province) {
        setCities(["", ...CA_UNIT_CITY[e.target.value].sort()]);
      } else {
        setCities([]);
      }

      setCity("");
      setProvince(e.target.value);
    },
    []
  );

  const handleCityChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setCity(e.target.value);
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!province || !city) {
        alert("Please select a province or city");
        return;
      }
      if (isValidURL(domain)) {
        const url = `${domain}list/jobs-in-${city}?state=${province}&city=${city}`;
        setLink(url);
        const msg = (await writeToClipboard(url))
          ? "Marketing Link Copied to Your Clipboard"
          : "Please Copy Marketing Link";
        alert(msg);
      } else {
        alert("Invalid Kibbi Applicant Domaim!");
      }
    },
    [city, domain, province]
  );

  const handleReset = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDomain(DEFAULT_DOMAIN);
    setCity("");
    setProvince("");
    setCities([]);
    setLink("");
  }, []);
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
        <SCForm onSubmit={handleSubmit} onReset={handleReset}>
          <SCLabel htmlFor="domain">Kibbi Applicant Domain</SCLabel>
          <SCInput
            name="domain"
            id="domain"
            placeholder="Kibbi Applicant Website Address"
            value={domain}
            type="url"
            required
            onChange={handleDomainChange}
          />
          <SCLabel htmlFor="province">Province</SCLabel>
          <SCSelect
            name="province"
            id="province"
            value={province}
            onChange={handleProvinceChange}
          >
            {provinces.length &&
              provinces.map((province) => (
                <option value={province} key={province}>
                  {province}
                </option>
              ))}
          </SCSelect>
          <SCLabel htmlFor="city">City</SCLabel>
          <SCSelect
            name="city"
            id="city"
            value={city}
            onChange={handleCityChange}
            disabled={!province}
          >
            {cities.length &&
              cities.map((city) => (
                <option value={city} key={city}>
                  {city}
                </option>
              ))}
          </SCSelect>
          <SCLabel htmlFor="Link">Marketing Link</SCLabel>
          <SCInput
            name="Link"
            id="Link"
            placeholder={`${DEFAULT_DOMAIN}list/jobs-in-[City]`}
            value={link}
            type="url"
            onChange={(f) => f}
          />
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
