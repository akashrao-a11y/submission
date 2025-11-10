import React from "react";
import Greeting from "./components/Greeting";
import Welcome from "./components/Welcome";
import Thoughts from "./components/Thoughts";
import WellKnownPeople from "./components/WellKnownPeople";
import FIX_ERROR_01 from "./components/FIX_ERROR_01";
import PeopleData from "./components/PeopleData";
const App = () => {
  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Arial",
        marginTop: "50px",
        lineHeight: "1.6",
      }}
    >
      <Greeting />
      <Welcome />
      <Thoughts />
      <PeopleData/>
      <FIX_ERROR_01/>
    </div>
  );
};

export default App;
