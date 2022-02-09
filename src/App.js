import { Routes, Route } from "react-router-dom";
import Button from "./Button";
import Screen from "./Screen";
import "./styles.css";
import Intro from "../src/Intro.png";
import Account from "../src/Account.png";
import AccDetails from "../src/AccountDetails.png";
import CrAccount from "../src/Create_an_Account.png";
import CarConnect from "../src/CarConnection.png";
import CC2 from "../src/CarConnection2.png";
import CC3 from "../src/CarConnection3.png";
import CC4 from "../src/CarConnection4.png";
import CC5 from "../src/CarConnection5.png";
import CC6 from "../src/CarConnection6.png";
import DA from "../src/Dataanalytics.png";
import DA1 from "../src/Dataanalytics1.png";
import DA2 from "../src/Dataanalytics2.png";

import Login from "../src/Login.png";
import SignUp from "../src/Signup.png";
//import CarModel from "../src/CarModel1.png";
//import Insert1 from "../src/Insert1.png";
//import Insert2 from "../src/Insert3.png";
//import Document from "../src/Documentation.png";
import ProdDesc1 from "../src/ProdDesc1.png";
import CarPiece from "../src/Carpiece.png";
import TechDet from "../src/TechDet.png";

import ModelOptions from "../src/ModelOptions.png";
import ProdDesc from "../src/ProdDesc.png";
import CarPart from "../src/CarPart.png";
import CarPart2 from "../src/CarPart2.png";

/* Change debug to `true` to see the invisible Buttons */

export const debug = false;

/* Step 1
<---- UPLOAD YOU OWN IMAGE FILES INTO /public

You can use .jpg, .png, .svg
Try to make all your images roughly the same width, 
i.e. 360 pixels wide for a mobile screen
or 1200 pixels wide for a desktop screen
*/

export default function App() {
  /* Step 2

  For each Screen in your click dummy, create a new
  - Route
    - Screen

  If you want to make the screens interactive, place a Button inside the screen
  – Route
    – Screen
      – Button
      – Button

  The Button "to" parameter links to the Route "path" parameter.
  The Screen "image" parameter should be the file name in the / folder (root)
  */
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Screen image={Login}>
              <Button to="/CarConnect" x="275" y="785" w="350" h="50" />
              <Button to="/CrAccount" x="275" y="905" w="350" h="50" />
            </Screen>
          }
        />
        <Route
          path="/CrAccount"
          element={
            <Screen image={CrAccount}>
              <Button to="/AccDetails" x="275" y="950" w="350" h="50" />
            </Screen>
          }
        />

        <Route
          path="/AccDetails"
          element={
            <Screen image={AccDetails}>
              <Button to="/" x="10" y="1025" w="150" h="55" />
              <Button to="/CrAccount" x="350" y="40" w="80" h="55" />
            </Screen>
          }
        />

        <Route
          path="/CarConnect"
          element={
            <Screen image={CarConnect}>
              <Button to="/CC2" x="848" y="612" w="270" h="55" />
              <Button to="/" x="350" y="40" w="80" h="55" />
              <Button to="/" x="10" y="1025" w="150" h="55" />
            </Screen>
          }
        />

        <Route
          path="/CC2"
          element={
            <Screen image={CC2}>
              <Button to="/CC3" x="1630" y="1025" w="60" h="55" />
              <Button to="/Carconnect" x="350" y="40" w="80" h="55" />
              <Button to="/" x="10" y="1025" w="150" h="55" />
            </Screen>
          }
        />

        <Route
          path="/CC3"
          element={
            <Screen image={CC3}>
              <Button to="/CC4" x="818" y="732" w="350" h="55" />
              <Button to="/CC2" x="350" y="40" w="80" h="55" />
              <Button to="/" x="10" y="1025" w="150" h="55" />
            </Screen>
          }
        />

        <Route
          path="/CC4"
          element={
            <Screen image={CC4}>
              <Button to="/CC5" x="1630" y="1025" w="60" h="55" />
              <Button to="/CC3" x="350" y="40" w="80" h="55" />
              <Button to="/" x="10" y="1025" w="150" h="55" />
            </Screen>
          }
        />

        <Route
          path="/CC5"
          element={
            <Screen image={CC5}>
              <Button to="/CC6" x="1630" y="1025" w="60" h="55" />
              <Button to="/CC4" x="350" y="40" w="80" h="55" />
              <Button to="/l" x="10" y="1025" w="150" h="55" />
            </Screen>
          }
        />

        <Route
          path="/CC6"
          element={
            <Screen image={CC6}>
              <Button to="/DA" x="1630" y="1025" w="60" h="55" />
              <Button to="/CC5" x="350" y="40" w="80" h="55" />
              <Button to="/" x="10" y="1025" w="150" h="55" />
            </Screen>
          }
        />

        <Route
          path="/DA"
          element={
            <Screen image={DA}>
              <Button to="/CC6" x="350" y="40" w="80" h="55" />
              <Button to="/DA1" x="1280" y="1015" w="360" h="55" />
              <Button to="/" x="10" y="1025" w="150" h="55" />
            </Screen>
          }
        />

        <Route
          path="/DA1"
          element={
            <Screen image={DA1}>
              <Button to="/DA" x="350" y="40" w="80" h="55" />
              <Button to="/DA2" x="1280" y="1015" w="360" h="55" />
              <Button to="/" x="10" y="1025" w="150" h="55" />
            </Screen>
          }
        />

        <Route
          path="/DA2"
          element={
            <Screen image={DA2}>
              <Button to="/DA" x="350" y="40" w="80" h="55" />
              <Button to="/DA3" x="1280" y="1015" w="360" h="55" />
              <Button to="/" x="10" y="1025" w="150" h="55" />
            </Screen>
          }
        />
      </Routes>
    </div>
  );
}
