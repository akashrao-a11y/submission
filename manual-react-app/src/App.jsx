import React from "react";
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
      
     
      <PeopleData/>
      <FIX_ERROR_01/>
    </div>
  );
};

export default App;
