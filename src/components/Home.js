import React from "react";
import Lottie from 'react-lottie';
import animationData from '../assets/lotti.json';

import headshot from '../assets/headshot.jpeg';

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="flex">
      <div className="mrpic">
        <img src={headshot} alt="headshot" />
        <div className="special1" id="name" className="absolute top-1/4 left-1/4 text-white animate-slideInDown">Amelio Mansour</div>
        <div className="special2" className="absolute top-1/4 left-1/4 text-white animate-slideInDown" id="title">Software Developer</div>
      </div>

      <div className="flex items-start w-full">
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          alt="lottie animation of software dev"
          className="mr-4"
          style={{ border: "1px solid black" }}
        />


        <div className="ml-6 flex flex-col" style={{ border: "1px solid black" }}>
          <p>Sterling Heights, MI | ameliomansour612@gmail.com | (586) 233-3132</p>
          <p>Career Focus: Software Development/Engineer Role</p>
          <p>Information Technology Senior with development skills, previous internship experience, and a knowledge of a variety of
            programming languages. Seeking a software developer position in a forward-thinking company that recognizes the
            importance of creating software that fits the business’s needs.</p>
        </div>
      </div>
    </div>
  );


}

export default Home;
