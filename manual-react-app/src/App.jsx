import React from "react";
import FIX_ERROR_01 from "./components/FIX_ERROR_01";
import PeopleData from "./components/PeopleData";
import FormContainer from "./components/FormContainer";
import YourData from "./components/YourData";

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
      <FormContainer />
      
    </div>
  );
};

export default App;
