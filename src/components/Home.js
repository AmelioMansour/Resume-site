import React from "react";
import Lottie from "lottie-react";
import animationData from '../assets/lotti.json';
import headshot from '../assets/headshot.jpeg';

function Home() {
  return (
    <div className="flex">
      <div className="mrpic">
        <img src={headshot} alt="headshot" />
        <div class="special1" id="name" className="absolute top-1/4 left-1/4 text-white animate-slideInDown">Amelio Mansour</div>
        <div class="special2" className="absolute top-1/4 left-1/4 text-white animate-slideInDown" id="title">Software Developer</div>
      </div>

      <div className="flex items-start">
        <Lottie
          animationData={animationData}
          style={{ width: 400, height: 400, border: "1px solid black" }}
        />
       
        <div className="ml-6 flex flex-col" style={{border: "1px solid black"}} > 
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
