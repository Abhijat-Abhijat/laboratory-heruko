import React from "react";
import Header from "./Header";
import {Link} from 'react-router-dom';
import Nav from "./Nav";
import "../styles/people.scss";
// import profilepic1 from "../assets/profilepic1.jpg";
import prerna from "../assets/Prerna.jfif";
import arjumand from "../assets/Arjumand.jfif";
import aprajita from "../assets/Aprajita.jpg";
import profile from "../assets/profile.webp";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaResearchgate } from "react-icons/fa";
function People() {
  return (
    <>
      <Header />
      <section>
        
        <div className="section">
          <div className="card">
            <div className="imgBx">
              <img src={profile} alt="" />
            </div>
            <div className="content">
              <h2>Dr. Rinu Sharma</h2>
              <h3>(Associate Professor)</h3>
              <p>
              

Area Of Specialization: Cancer Molecular Biology
BSc. Microbiology, University of Delhi
M.Sc., Biotechnology, All India Institute of Medical Sciences, New Delhi
Ph.D., All India Institute of Medical Sciences, New Delhi
Ramnath Hiralal Jaju Award (IACR) 2016
Sitaram Joglekar Award (IACR) 2005
Rinu.sharma@ipu.ac.in
              </p>
            </div>
            
            <div className="social">
            <a href="Mail"><FaGoogle/></a>
            <a href="LinkedIn"><FaLinkedinIn/></a>
            <a href="WhatsApp"><FaWhatsapp/></a>
            <a href="RGate"><FaResearchgate/></a>
            </div>  
          </div>
          
        </div>
        <div className="section">
          <div className="card">
            <div className="imgBx">
              <img src={prerna} alt="" />
            </div>
            <div className="content">
              <h2>Prerna Pandey</h2>
              <h3>Ph.D. Scholar</h3>
              <p>
MS,
Bsc,
              </p>
            </div>
            
            <div className="social">
            <a href="Mail"><FaGoogle/></a>
            <a href="LinkedIn"><FaLinkedinIn/></a>
            <a href="WhatsApp"><FaWhatsapp/></a>
            <a href="RGate"><FaResearchgate/></a>
            </div>  
          </div>
          
        </div>
        <div className="section">
          <div className="card">
            <div className="imgBx">
              <img src={profile} alt="" />
            </div>
            <div className="content">
              <h2>Kiran Pasbola</h2>
              <h3>Ph.D. Scholar</h3>
              <p>
MS,
Bsc,
              </p>
            </div>
            
            <div className="social">
            <a href="Mail"><FaGoogle/></a>
            <a href="LinkedIn"><FaLinkedinIn/></a>
            <a href="WhatsApp"><FaWhatsapp/></a>
            <a href="RGate"><FaResearchgate/></a>
            </div>  
          </div>
          
        </div>
        <div className="section">
          <div className="card">
            <div className="imgBx">
              <img src={arjumand} alt="" />
            </div>
            <div className="content">
              <h2>Arjumand Bano</h2>
              <h3>Ph.D. Scholar</h3>
              <p>
MS,
Bsc,
              </p>
            </div>
            
            <div className="social">
            <a href="Mail"><FaGoogle/></a>
            <a href="LinkedIn"><FaLinkedinIn/></a>
            <a href="WhatsApp"><FaWhatsapp/></a>
            <a href="RGate"><FaResearchgate/></a>
            </div>  
          </div>
          
        </div>
        <div className="section">
          <div className="card">
            <div className="imgBx">
              <img src={aprajita} alt="" />
            </div>
            <div className="content">
              <h2> Aprajita</h2>
              <h3>Ph.D. Scholar</h3>
              <p>
Integrated M.Tech., Barkatullah University, 2020
Intern, National Institute of Animal Biotechnology, 2019
              </p>
            </div>
            
            <div className="social">
            <a href="Mail"><FaGoogle/></a>
            <a href="LinkedIn"><FaLinkedinIn/></a>
            <a href="WhatsApp"><FaWhatsapp/></a>
            <a href="RGate"><FaResearchgate/></a>
            </div>  
          </div>
          
        </div>
        <div className="alumni">
        <Link to='/alumni'>Previous Alumni</Link>
        </div>
      </section>
      <Nav />
    </>
  );
}

export default People;
