import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Full Stack Web and Software Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Ryan Chrisenberry"/>
      <p className="content">
      I am a Front-End Developer based out of Houston, Texas. I have a deep passion for design and I love creating captivating, unique, and user-friendly customer-facing experiences.
      </p>
    </div>
  );
}

export default About;