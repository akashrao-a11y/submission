import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store"; 
import App from "./App";
import MainRow from "./components/MainRow";
import FormComponent from "./components/FormComponent";
import FormContainer from "./components/FormContainer";

const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
        <MainRow />
        <FormContainer />
    </Provider>
);


