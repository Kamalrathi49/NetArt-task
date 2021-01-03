import React from "react";

import "./App.css";

import trophyimg from "./images/trophy.png";

import logo from "./images/logo.png";

import png3 from "./images/3.png";

import png2 from "./images/2.png";

function App() {
  return (
    <div className="App">
      <div className="logo-img">
        <img
          className="img-fluid"
          src={logo}
          alt="./images/logo.png"
          height="250px"
          width="250px"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <img
              className="img-fluid"
              src={trophyimg}
              alt="loading"
              height="340px"
              width="350px"
            />
          </div>

          <div className="col-sm-12 col-md-8 col-lg-8">
            <h5 className=" ">
              {" "}
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h5>
            <ul>
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                {" "}
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.{" "}
              </li>
            </ul>
            <img
              className="img-fluid "
              src={png2}
              alt="Loading...."
              width="100%"
            />
            <ul>
              <li>
                Government of India has awarded the "National Energy
                Conservation Award 2018". Mr. G. Selvaraj, Joint Managing
                Director of C.R.I. Group received the award from Smt. Sumitra
                Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable
                Minister of State.
              </li>
            </ul>
          </div>
          <p>
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.
          </p>
          <img className="img-fluid" src={png3} alt="loading" />
          <p className="img-bottom">
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors{" "}
          </p>
          <hr />
          <h5 className="img-bottom">
            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
          </h5>
          <p>
            CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA
            SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING
            FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE
            FIGHTING AGRICULTURE & RESIDENTIAL
          </p>
        </div>
      </div>
      <div className="footer">
        <p>
          <ion-icon name="call-outline" />
          Toll Free:1800 700 1234
        </p>
        <p>
          <ion-icon name="logo-facebook" />
          www.facebook.com/cripumps
        </p>
        <p>
          <ion-icon name="globe-outline"></ion-icon>www.crigroups.com
        </p>
      </div>
    </div>
  );
}

export default App;
