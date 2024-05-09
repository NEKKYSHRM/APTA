import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Home.css";
import "./Utilities/card.css";
import diamond_svg from "../assets/svg/diamond-outline.svg";
import compass_svg from "../assets/svg/compass-outline.svg";
import people_svg from "../assets/svg/people-circle-outline.svg";
import cube_svg from "../assets/svg/cube-sharp.svg";
import Hero2 from "../assets/Hero/Hero2.jpg";
import Hero3 from "../assets/Hero/Hero3.jpg";

export default function Home() {
  const[hero, setHero] = useState(0)
  const heroImages = [
    Hero2,
    Hero3
  ]

  useEffect(()=>{
    const intervalId = setInterval(()=> {
      setHero((preHero) => (preHero+1)%heroImages.length)
    }, 3000);

    return() => clearInterval(intervalId);
  }, [heroImages.length])
  
  return (
    <div className="home-page" >
      <section className="hero">
        <div className="hero-frame">
          <img src={heroImages[hero]} alt={`Slide ${hero + 1}`} />
        </div>
        <div className="heroText">
          <span>
            Connecting Influencers and
            <br /> Companies for Sponsorships
          </span>
          <p>
            Discover new opportunities and collaborations in the influencer
            industry
          </p>
          <div className="heroButtons">
            <button style={{ backgroundColor: "black" }}>Learn More</button>
            <button>Sign Up</button>
          </div>
        </div>
      </section>

      <section className="home-sec2">
        <div className="cards-container">
          <div className="card">
            <div className="card-icon">
              <img src={diamond_svg} alt="" />
            </div>
            <div className="content">
              <h2>Connecting Influencers with Companies and More</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Link to="#">Learn More</Link>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">
              <img src={compass_svg} alt="" />
            </div>
            <div className="content">
              <h2>Discover New Sponsorship Opportunities</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Link to="#">Learn More</Link>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">
              <img src={people_svg} alt="" />
            </div>
            <div className="content">
              <h2>Connect and Collaborate with Influencers</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Link to="#">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-sec3">
        <h1>Discover Influencers and Companies for<br /> Sponsorships</h1>
        <div className="cards-container-2">
          <div className="card2">
            <div className="card2-icon">
              <img src={cube_svg} alt="" />
            </div>
            <div className="card2-content">
              <h2>Connecting with Influencers and Companies Easily</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempora repudiandae provident adipisci maiores, officia possimus
                ipsa quidem unde officiis voluptatem.
              </p>
              <Link to="#">Learn More</Link>
            </div>
          </div>
          <div className="card2">
            <div className="card2-icon">
              <img src={cube_svg} alt="" />
            </div>
            <div className="card2-content">
              <h2>Connecting with Influencers and Companies Easily</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempora repudiandae provident adipisci maiores, officia possimus
                ipsa quidem unde officiis voluptatem.
              </p>
              <Link to="#">Learn More</Link>
            </div>
          </div>
          <div className="card2">
            <div className="card2-icon">
              <img src={cube_svg} alt="" />
            </div>
            <div className="card2-content">
              <h2>Connecting with Influencers and Companies Easily</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempora repudiandae provident adipisci maiores, officia possimus
                ipsa quidem unde officiis voluptatem.
              </p>
              <Link to="#">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-sec4">
        <h1>Connect and Collaborate<br /> with Influencers</h1>
        <div className="home-sec4-cta">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum quisquam in nisi expedita, repellendus aliquid.</p>
          <button>Sign Up</button>
          <button>Login</button>
        </div>
      </section>
    </div>
  );
}
