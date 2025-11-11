import React from "react";
import Welcome from "./components/Welcome";
import Thoughts from "./components/Thoughts";
import FIX_ERROR_01 from "./components/FIX_ERROR_01";
import PeopleData from "./components/PeopleData";

const App = () => {
  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Arial",
        lineHeight: "1.6",
        padding: "0 1rem",
      }}
    >
      <Welcome />
      <Thoughts />
      <PeopleData/>
      <FIX_ERROR_01/>
    </div>
  );
};

export default App;
