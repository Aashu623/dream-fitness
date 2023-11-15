import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import Logo from "../../assets/dream-fitness-logo.png";

import hero_image_back from "../../assets/hero_image_back.png";
import { motion } from "framer-motion";
function Home() {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth<=768?true:false;
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* ṭhe best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left:mobile?'178px':'238px' }}
            whileInView={{ left: "8px" }}
            transition={transition}
          ></motion.div>
          <span>the best fitness club of town</span>
        </div>
        {/* ṭhe best ad */}

        {/* heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">dream fitness</span>
            {/* <span>Fitness</span> */}
          </div>
          <div>
            <span>gym</span>
          </div>
          <div>
            <span className="span">
              IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR DREAM BODY AND
              LIVE UP YOUR LIFE TO FULLEST
            </span>
          </div>
          <div className="figures">
            <div>
              <span>10+</span>
              <span>Trainer</span>
            </div>
            <div>
              <span>350+</span>
              <span>members</span>
            </div>
            <div>
              <span>40+</span>
              <span>Machines</span>
            </div>
          </div>
        </div>
        {/* heading */}

        {/* hero button */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
        {/* hero button */}
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <img src={Logo} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />
      </div>
    </div>
  );
}

export default Home;
