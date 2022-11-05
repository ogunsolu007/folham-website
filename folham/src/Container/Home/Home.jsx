import "./home.css";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import slide1 from "../../assets/slide1.jpg";
import { SiJamboard } from "react-icons/si";
import { CgMediaLive } from "react-icons/cg";
import { MdOutlineCampaign, MdBrandingWatermark } from "react-icons/md";
import { slides } from "../../constants/data";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


const Home = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="home ">
      <div className="hero_section ">
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
          <Carousel showArrows={true} autoPlay={true} interval="20000">
            <img src={slide1} alt={slides.name} />
            <img src={slide2} alt={slides.name} />
            <img src={slide3} alt={slides.name} />
          </Carousel>
        </div>
      </div>
      <div className="features_container">
        <div className="section__title">
          <h1>
            Our <span>Core</span> Features
          </h1>
        </div>
        <div className="features">
          <div className="feature ">
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
            <h3>CAMPAIGN DEPLOYMENT / MAINTENANCE</h3>
            <p>
              We believe in delivering value hence our utmost investment in our
              clients campaign process from inception to end.
            </p>
          </div>
        </div>
      </div>

      <div className="company_history ">
        <div className=" company_history-text">
          <h1>FOLHAM NIG. LIMITED</h1>
          <p>
            Since 1984, Folham has used its outdoor advertising expertise to
            help companies of every size reach out to their current and
            potential customers. To compete in the fast growing industry, we
            keep modernizing our operations by introducing new products
            offerings in the OOH space, these products range from Digital LED
            Billboards, to "Human Walking" billboards which are popular for
            creating awareness for brands during activations and other formal
            /informal events. We actively participate in providing publicly
            owned OOH assets like; Public Buses (BRT), Bus Shelters and Street
            Lamppost to our existing clients in various parts of the country.
          </p>
          <p>
            Dedicated to the growth of our partners/clients, we work with poised
            and qualified employees to achieve their current expectations and
            satisfy any changing needs in the advertising industry.
          </p>
        </div>
        <div className=" company_history-img">
          <img src={slide2} alt="company work" />
        </div>
      </div>

      <div className="numbers">
        <div className=" numbers_stat">
          <span>36</span>
          <p>
            years of
            <br /> experience
          </p>
        </div>
        <div className=" numbers_stat">
          <span>454</span>
          <p>
            completed <br /> project
          </p>
        </div>
        <div className=" numbers_stat">
          <span>127</span>
          <p>
            happy <br /> clients
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;


/* http://react-responsive-carousel.js.org/storybook/?path=/story/01-basic--base&knob-showArrows_Toggles=true&knob-showStatus_Toggles=&knob-showIndicators_Toggles=&knob-infiniteLoop_Toggles=true&knob-showThumbs_Toggles=&knob-useKeyboardArrows_Toggles=true&knob-autoPlay_Toggles=true&knob-stopOnHover_Toggles=true&knob-swipeable_Toggles=true&knob-dynamicHeight_Toggles=true&knob-emulateTouch_Toggles=true&knob-autoFocus_Toggles=&knob-thumbWidth_Values=100&knob-selectedItem_Values=0&knob-interval_Values=2000&knob-transitionTime_Values=500&knob-swipeScrollTolerance_Values=5

http://react-responsive-carousel.js.org/storybook/?path=/story/01-basic--base&knob-showArrows_Toggles=true&knob-showStatus_Toggles=&knob-showIndicators_Toggles=&knob-infiniteLoop_Toggles=true&knob-showThumbs_Toggles=&knob-useKeyboardArrows_Toggles=true&knob-autoPlay_Toggles=true&knob-stopOnHover_Toggles=true&knob-swipeable_Toggles=true&knob-dynamicHeight_Toggles=true&knob-emulateTouch_Toggles=true&knob-autoFocus_Toggles=&knob-thumbWidth_Values=100&knob-selectedItem_Values=0&knob-interval_Values=2000&knob-transitionTime_Values=500&knob-swipeScrollTolerance_Values=5 */