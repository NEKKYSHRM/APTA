import React from "react";

import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-page">
      <div className="about-page-container">
        <section className="about-sec1">
          <div className="about-title">
            <hr className="hr-hz" />
            <h1>About Us</h1>
            <hr className="hr-hz" />
            <p>
              At APTA, we believe in the power of connections. Founded with a
              vision to bridge influencers and brands, we are dedicated to
              creating meaningful partnerships that drive mutual success and
              innovation in the digital space.
            </p>
          </div>
          <div className="about-topic">
            <h2>Who We Are</h2>
            <p>
              APTA is not just a platform; we are a community of creators,
              marketers, and innovators passionate about shaping the future of
              influencer marketing. Our diverse team brings expertise from
              various backgrounds, uniting to provide a seamless and impactful
              experience for influencers and brands alike.
            </p>
          </div>
          <div className="about-topic">
            <h2>Our Mission</h2>
            <p>
            Our mission is clear: to empower influencers and brands to thrive in a dynamic digital landscape. We strive to foster genuine connections, foster creativity, and unlock new opportunities for growth and collaboration.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
