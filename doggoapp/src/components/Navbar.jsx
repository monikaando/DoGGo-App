import React from "react";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navigation d-flex flex-column justify-content-between">
      <Link to={"/DoGGo-App"} className="btn btn-outline-light">
        Home
      </Link>
      <Link to={"/random-dog-fact"} className="btn btn-outline-light">
        Random Fact
      </Link>
      <Link to={"/all-dogs-facts"} className="btn btn-outline-light">
        All Dogs Facts
      </Link>
    </div>
  );
}
