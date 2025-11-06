import React from "react";
import "./Home.css";
import profileImg from "/Users/harshi/abcd copy/src/assets/profile.JPG";


const Home = () => {
  return (
    <section id="home" className="home">
      <div className="content">
      <img src={profileImg} alt="Profile" className="home-avatar" />
        <h1>Hi, I'm <span>Harshita Nath</span></h1>
        <p>A Computer Science student passionate about building efficient, user-focused digital solutions</p>
        <button>Let's get in touch!</button>
      </div>
    </section>
  );
};

export default Home;
