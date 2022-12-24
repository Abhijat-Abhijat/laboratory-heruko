import React, { useState } from "react";
import Papa from "papaparse";
import Header from "./Header";
import Nav from "./Nav";
import "../styles/news.scss";

const News = () => {
  const [data, setData] = useState({});
  Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vReUl2clcK_HXNlC4dD297rNn3NA2_Zgr72g15QVAEtDbjyPH90aljISq2L3zdyKGxJX0cMpc1hVEb2/pub?output=csv", {
    download: true,
    header: true,
    complete: (results) => {
      setData(results.data);
    },
  });
  const newss = Array.from(data);
  return (
    <>
    <Header/>

    <table>
            <tr>
              <th>Title</th>
              <th>Link</th>
            </tr>
      {newss.map((data) => (
          
            <tr key={data.title}>
              <td className="title">{data.title}</td>
              <td className="link"><a href={data.link}>link</a></td>
            </tr>
          
      ))}
      </table>
    <Nav/>
    </>
  );
};
export default News;