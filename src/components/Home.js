import { Link } from "react-router-dom";
import React from "react";
import "./style/Home.css";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home">
          <Header />
          <div className="contents">
            <h2>Diary</h2>
            <div className="diary-container">
              <Link to="diary">
                <div className="diary">
                  <img
                    src="/images/debi.jpg"
                    alt="debidebidebiru"
                    width="100%"
                  />
                  <h3>ここにタイトル</h3>
                  <p>ここに簡単な説明とか なんかそういうの</p>
                </div>
              </Link>
              <Link to="diary">
                <div className="diary">
                  <img
                    src="/images/debi.jpg"
                    alt="debidebidebiru"
                    width="100%"
                  />
                  <h3>ここにタイトル</h3>
                  <p>ここに簡単な説明とか なんかそういうの</p>
                </div>
              </Link>
            </div>
            <h2>Likes</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
