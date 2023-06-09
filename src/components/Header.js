import React from "react";
import { Link } from "react-router-dom";
import "./style/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <div className="profile-container">
        <div className="profile">
          <div className="left">
            <Link to="/">
              <img
                src="./logo500.png"
                alt="icon"
                width={"100"}
                height={"100"}
              />
            </Link>
          </div>
          <div className="right">
            <div className="top">
              <h2 className="my-name">39rep</h2>
            </div>
            <div className="bottom">
              <p className="describe">にじさんじ好きな大学生</p>
              <Link to="/aboutme">
                <FontAwesomeIcon icon={faArrowRight} />
                about me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
