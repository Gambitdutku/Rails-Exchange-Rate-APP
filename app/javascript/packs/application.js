import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "../components/Dashboard"; 

// Render Dashboard component
document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Dashboard />,
    document.getElementById("react-dashboard")
  );
});
