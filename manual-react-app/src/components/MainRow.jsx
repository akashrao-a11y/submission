import React from "react";
import DynamicForm from "./DynamicFrom";
import NamePasswordForm from "./NamePasswordForm";
import YourData from "./YourData";
class MainRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedData: null,
    };
  }
 
  handleFormSubmit = (data) => {
    this.setState({ submittedData: data });
  };
 
  render() {
    const rowStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "20px",
      flexWrap: "wrap",
      marginTop: "50px",
    };
 
    return (
      <div style={rowStyle}>
        <DynamicForm onSubmitCallback={this.handleFormSubmit} />
        <NamePasswordForm />
        <YourData submittedData={this.state.submittedData} />
      </div>
    );
  }
}
 
export default MainRow;