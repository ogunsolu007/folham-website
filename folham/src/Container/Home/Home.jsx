
import "./home.css";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import slide1 from "../../assets/slide1.jpg";
import { SiJamboard } from "react-icons/si";
import { CgMediaLive } from "react-icons/cg";
import { MdOutlineCampaign, MdBrandingWatermark } from "react-icons/md";
import { slides } from "../../constants/data";
import { useState } from "react";

const Home = () => {
  const[index,setIndex]= useState(0)

  return (
    <div className="home ">
      <div className="hero_section section_padding">
        <div className="hero_section-content">
          <h1>
            INNOVATIVE EFFICIENT <span>& PROFESSIONAL</span>
          </h1>
          <p>
            We are an innovative company bounded by top-notch{" "}
            <span>professionalism and </span>
            driven to deliver quality products/services.
          </p>
          <button className="btn hero_btn ">Explore our site</button>
        </div>
        <div className="hero_section-image">
          <img src={slide1} alt={slides.name} />
          <img src={slide1} alt={slides.name} />
          <img src={slide1} alt={slides.name} />
        </div>
      </div>

      <div className="features_container section_margin">
        <div className="features">
          <div className="feature">
            <SiJamboard className="icon" />
            <h3>Billboards</h3>
            <p>
              Our Out Of Home Formats are strategically placed nationwide
              reaching our clients target audience efficiently and effectively.
            </p>
          </div>
          <div className="feature">
            <CgMediaLive className="icon" />
            <h3>media buying</h3>
            <p>
              With over 30 years experience in the OOH Industry, we have carved
              a niche in media buying, successfully planning and executing media
              buying for all our clients.
            </p>
          </div>
          <div className="feature">
            <MdBrandingWatermark className="icon" />
            <h3>BRANDING & ACTIVATIONS</h3>
            <p>
              We consult for brands looking at changing their entire brand
              outlook as well as implementing brand activation campaigns for our
              clients.
            </p>
          </div>
          <div className="feature">
            <MdOutlineCampaign className="icon" />
            <h3>CAMPAIGN DEPLOYMENT/MAINTENANCE</h3>
            <p>
              We believe in delivering value hence our utmost investment in our
              clients campaign process from inception to end.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

