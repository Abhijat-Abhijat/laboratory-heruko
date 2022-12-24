import React, { useState } from "react";
import Papa from "papaparse";
import Header from "./Header";
import Nav from "./Nav";
import "../styles/publications.scss";

const Publications = () => {
  const [data, setData] = useState({});
  Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vT-_2g7lnDlNahgZqkr-fWObh__HzTpjFrDUrMlhviNsUF3G5KMRT5f-AuckSeN0QUKB0KPwufupVSH/pub?output=csv", {
    download: true,
    header: true,
    complete: (results) => {
      setData(results.data);
    },
  });
  const publication = Array.from(data);
  return (
    <>
    <Header/>
    <ul>
      {publication.map((data) => (
        <li key={data.publications}>
          {data.publications} - <a href={data.link}>LINK</a>
          
        </li>
      ))}
    </ul>
    <Nav/>
    </>
  );
};
export default Publications;