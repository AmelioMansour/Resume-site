import React from "react";
import Lottie from "lottie-react";
import animationData from '../assets/lotti.json';
import headshot from '../assets/headshot.jpeg';

function Home() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="mrpic relative mb-8 md:mb-0 md:mb-4">
        <img
          src={headshot}
          alt="headshot"
          className="w-full h-auto mb-4 md:mb-0 md:mr-4 mobile-top-margin"
        />
        <div id="name" className="absolute top-1/4 left-1/4 text-white animate-bounce">Amelio Mansour</div>
        <div id="title" className="absolute top-1/4 left-1/4 text-white animate-bounce">Software Developer</div>

      </div>

      <div className="flex flex-col items-start md:items-center md:flex-row"> {/* Center items on larger screens */}
        {/* <Lottie
          animationData={animationData}
          style={{ maxWidth: '100%', height: 'auto', border: "1px solid black" }}
          className="mb-4 md:mb-0 md:mr-6" // Margin adjustments
        /> */}

        <div className="flex flex-col text-sm md:text-base" > {/* Adjusted text size for mobile */}
          <p>Sterling Heights, MI | ameliomansour612@gmail.com </p>
          <p>Career Focus: Software Development/Engineer Role</p>
          <p>Information Technology Senior with development skills, previous internship experience, and a knowledge of a variety of programming languages. Seeking a software developer position in a forward-thinking company that recognizes the importance of creating software that fits the business’s needs.</p>
        
        </div>
      <br></br>
      </div>
    </div>
  );
}

export default Home;
