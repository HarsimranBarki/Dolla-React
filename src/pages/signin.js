import React from "react";

const SigninPage = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <h1 style={{ textAlign: "center", fontSize: "2rem", color: "#01bf71" }}>
        Sign in
      </h1>
      <p style={{ textAlign: "center", marginTop: "30px", fontSize: "1.2rem" }}>
        Google Sign in coming soon..
      </p>
      <button
        style={{
          textAlign: "center",
          marginTop: "60px",
          fontSize: "1.2rem",
          margin: "50px auto auto auto",
          display: "block",
          border: "none",
          backgroundColor: "#01bf71",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "50px",
          cursor: "pointer",
        }}
        to="/"
      >
        Go Home
      </button>
    </div>
  );
};

export default SigninPage;
