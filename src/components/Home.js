import React from "react";
import Lottie from "lottie-react";
import animationData from '../assets/lotti.json';
import headshot from '../assets/headshot.jpeg';

function Home() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap">
      <div className="mrpic relative flex flex-col items-center md:items-start mb-8 md:mb-0 flex-shrink">
        <div
          style={{ backgroundImage: `url(${headshot})` }}
          className="w-64 h-96 mb-4 md:mb-0 md:mr-4 mobile-top-margin flex-shrink-0 bg-contain bg-center relative"
        >
          <div className="absolute bottom-0 px-4 py-3 bg-gray-500/50 w-full">
            <div id="name" className="text-white animate-slideInDown text-3xl md:text-7xl font-bold mb-8">
              Amelio Mansour
            </div>
            <div id="title" className="text-white animate-slideInDown text-2xl md:text-5xl font-bold mb-3">
              Software Developer
            </div>
          </div>
        </div>
        <Lottie
          animationData={animationData}
          className="mb-4 md:mb-0 md:mr-6 lottie-animation flex-none"
        />
      </div>
      <div className="flex flex-col items-start md:items-center md:flex-row flex-grow">
        <div className="flex flex-col text-sm md:text-base" style={{ border: "1px solid black" }}>
          <p>Sterling Heights, MI | ameliomansour612@gmail.com | (586) 233-3132</p>
          <p>Career Focus: Software Development/Engineer Role</p>
          <p>Information Technology Senior with development skills, previous internship experience, and a knowledge of a variety of programming languages. Seeking a software developer position in a forward-thinking company that recognizes the importance of creating software that fits the business’s needs.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
