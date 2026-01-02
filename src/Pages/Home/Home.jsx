import React from "react";
import "./Home.css";
import Nav from "../../Components/Navbar/Nav";
import heroBanner from "../../assets/hero_banner.jpg";
import heroTitle from "../../assets/hero_title.png";
import playIcon from "../../assets/play_icon.png";
import infoIcon from "../../assets/info_icon.png";
import TitleCards from "../../Components/TitleCards/TitleCards";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <div className="hero">
        <img src={heroBanner} alt="" className="banner__img" />
        <div className="hero__caption">
          <img src={heroTitle} alt="" className="caption__img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in morder Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero__btns">
          <button className='btn'><img src={playIcon} alt="" />Play</button>
          <button className='btn dark__btn'><img src={infoIcon} alt="" />More Info</button>
        </div>
        <TitleCards />
        </div>  
         
        
      </div>
      <div className="more__cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Picks for you"} category={"now_playing"}/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
