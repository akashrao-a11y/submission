import React from "react";
 
class YourData extends React.Component {
  render() {
    const { submittedData } = this.props;
 
    const containerStyle = {
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "20px",
      width: "300px",
      height: "280px",
      backgroundColor: "white",
      textAlign: "center",
      boxSizing: "border-box",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    };
 
    const titleStyle = {
      fontSize: "18px",
      fontWeight: "600",
      color: "#333",
      marginBottom: "16px",
      marginTop: "0",
    };
 
    const dataBoxStyle = {
      marginBottom: "8px",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      background: "#f9f9f9",
      textAlign: "left",
      fontSize: "14px",
    };
 
    return (
      <div style={containerStyle}>
        <h3 style={titleStyle}>Your Data</h3>
        {submittedData ? (
          <div>
            <div style={dataBoxStyle}>
              <strong>Name:</strong> {submittedData.username}
            </div>
            <div style={dataBoxStyle}>
              <strong>Email ID:</strong> {submittedData.email}
            </div>
            <div style={dataBoxStyle}>
              <strong>Password:</strong> ••••••••
            </div>
          </div>
        ) : (
          <div style={{ ...dataBoxStyle, textAlign: "center", color: "#666" }}>
            No data submitted yet
          </div>
        )}
      </div>
    );
  }
}
 
export default YourData;