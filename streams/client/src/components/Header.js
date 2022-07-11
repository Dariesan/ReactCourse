import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div>
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          cur
        </Link>
        <div className="right menu">
          <Link to="/" className="item">
            All Stream
          </Link>
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

export default Header;
