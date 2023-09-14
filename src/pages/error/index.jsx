import React from "react";
import img from "../../images/not-found.svg";

const Error = () => {
  return (
    <main
      style={{
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "200px",
      }}
    >
      <div>
        <img
          src={img}
          alt="not found"
          style={{ maxWidth: "600px", display: "block", marginBottom: "2rem" }}
        />
        <h3>Ohh! page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
      </div>
    </main>
  );
};

export default Error;
