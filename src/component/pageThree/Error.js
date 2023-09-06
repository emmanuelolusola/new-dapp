import React from "react";

const Error = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "var(--font-family)",
    background: "#f0f0f0",
  };

  const errorStyle = {
    fontSize: "60px",
    fontWeight: "800",
    textAlign: "center",
    color: "#e74c3c",
    marginBottom: "20px",
  };

  const messageStyle = {
    fontSize: "20px",
    color: "#555",
    textAlign: "center",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "0 20px",
  };

  return (
    <div style={containerStyle}>
      <div>
        <div style={errorStyle}>Error: 503</div>
        <p style={messageStyle}>
          Oops! Something went wrong.
          <br />
          We're working to get things back up and running. Please try again
          later.
        </p>
      </div>
    </div>
  );
};

export default Error;
