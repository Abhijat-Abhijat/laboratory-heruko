import React from "react";
import Header from "./Header";
// import {Link} from 'react-router-dom';
import Nav from "./Nav";
import "../styles/alumni.scss";

function Alumni() {
  return (
    <>
      <Header />
      <section>
        <table>
          <caption>ALUMNI</caption>
          <tr>
            <th>Name</th>
            <th>Program</th>
            <th>Current</th>
          </tr>
          <tr>
            <td>Prerna Pandey</td>
            <td>Ph.D. Scholar</td>
            <td>Postdoctoral Fellow, University of California, San Diego</td>
          </tr>
        </table>
      </section>
      <Nav />
    </>
  )
}

export default Alumni;