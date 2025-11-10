import React from "react";
 
class DynamicForm extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }
 
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
 
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.props.onSubmitCallback) {
      this.props.onSubmitCallback(this.state); // send data to parent
    }
    alert(`DynamicForm Submitted: ${JSON.stringify(this.state)}`);
  };
 
  handleClear = () => {
    this.setState({ username: "", email: "", password: "" });
  };
 
  render() {
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
 
    const inputStyle = {
      padding: "8px 12px",
      margin: "6px 0",
      width: "100%",
      borderRadius: "5px",
      border: "1px solid #ddd",
      fontSize: "14px",
      boxSizing: "border-box",
      transition: "border-color 0.2s ease",
    };
 
    const buttonStyle = {
      padding: "8px 16px",
      margin: "8px 4px 0 0",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "500",
      color: "#fff",
      transition: "opacity 0.2s ease",
    };

    return (
      <div style={containerStyle}>
        <h3 style={titleStyle}>Dynamic Form</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            style={inputStyle}
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
            onFocus={(e) => e.target.style.borderColor = "#4a90e2"}
            onBlur={(e) => e.target.style.borderColor = "#ddd"}
            required
          />
          <input
            style={inputStyle}
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            onFocus={(e) => e.target.style.borderColor = "#4a90e2"}
            onBlur={(e) => e.target.style.borderColor = "#ddd"}
            required
          />
          <input
            style={inputStyle}
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            onFocus={(e) => e.target.style.borderColor = "#4a90e2"}
            onBlur={(e) => e.target.style.borderColor = "#ddd"}
            required
          />
          <div>
            <button 
              type="submit" 
              style={{ ...buttonStyle, background: "#4a90e2" }}
              onMouseEnter={(e) => e.target.style.opacity = "0.9"}
              onMouseLeave={(e) => e.target.style.opacity = "1"}
            >
              Submit
            </button>
            <button
              type="button"
              style={{ ...buttonStyle, background: "#e74c3c" }}
              onClick={this.handleClear}
              onMouseEnter={(e) => e.target.style.opacity = "0.9"}
              onMouseLeave={(e) => e.target.style.opacity = "1"}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    );
  }
}
 
export default DynamicForm;