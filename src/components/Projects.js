import React from "react";

function Projects() {
    return (
        <div>
            <h2>Projects</h2>

            <div className="project">
                <h3>ChefBot AI</h3>
                <ul>
                    <p>For my senior capstone project, I am developing a web application that enables end-users to explore a wide range of possible
                        new recipes using the cooking ingredients available in their kitchens. Users are able to enter cooking ingredients and they will receive three possible
                        recipes they can create, accompanied by cooking instructions and measurements. In addition, users are able to save the recipes that they like to their profile
                        to be able to create their own "cook book".</p>
                    <li>Technologies: Artificial Intelligence/LLM, React, JavaScript, Splide, JSX Element, Functional Component, Hooks in React, React-Router Dom, and Github.</li>
                    <li><a href="https://github.com/AmelioMansour/Capstone-Project" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>https://github.com/AmelioMansour/Capstone-Project</a></li>
                </ul>
            </div>

            <div className="project">
                <h3>Day Care Management System</h3>
                <ul>
                    <p>For my Sophomore project, I lead a team of 4 to develop a web application that provides solutions to running the day-to-day activities and operations at a child daycare. Our platform provides staff with the ability to view parent accounts, child information, view/edit appointments, and view/edit their profile. Parent's also have the ability to view staff profiles, view/edit their children's information, and make/edit children's appointments.</p>
                    <li>Technologies: Amazon Web Services, Amazon EC2 instance, Amazon S3, Lets Encrypt, PHP, Apache, SQL, HTML, CSS.</li>
                    <li><a href="https://github.com/AmelioMansour/Sophmore-Project" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>https://github.com/AmelioMansour/Sophmore-Project</a></li>
                </ul>
            </div>

            <div className="project">
                <h3>Fitness Tracker</h3>
                <ul>
                    <p>For my Software Engineering project, I lead a team of 7 to create a cross-platform application that allows users to track their physical activities such as steps, bench presses, leg presses, and a library of different types of exercises. Our project goal was, it is hard to get into fitness and even harder to remain consistent. Many people get stuck in their progress and need direction on how to improve. Using our platform users can keep record of all of their workouts by entering them from the android phone app, or on the website from their desktop. Users also have the flexibility to input multiple exercises within a single workout, with the application seamlessly calculating the total calories burned for each session.</p>
                    <li>Technologies: Svelte front-end framework, Python, MongoDB, Github, Heroku, Android studio, RESTful API's, JSON, HTML, CSS, and Bootstrap.</li>
                    <li><a href="https://github.com/AmelioMansour/Fitness-Pro-Website" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>https://github.com/AmelioMansour/Fitness-Pro-Website</a></li>
                    <li><a href="https://github.com/AmelioMansour/FitnessProApp" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>https://github.com/AmelioMansour/FitnessProApp</a></li>
                </ul>
            </div>

            <div className="project">
                <h3>Home Assistant – Personal Project</h3>
                <ul>
                    <p>Home Assistant is an open source software for home automation. I implemented and fully configured this software on a Raspberry Pi to create a centralized hub for managing all of my smarthome's devices. I have skillfully integrated and centralized nine smart devices across various platforms (Google, Apple, Tuya, Goove, LG, WeMo, and Tile). I have also created custom automation routines to automate tasks and enhance the overall efficiency of my smart home setup. I have Implemented prebuilt and custom-built API's in the environment. To ensure secure communication between my environment and external services, I implemented Let's Encrypt, leveraging their free SSL/TSL certificates for enhanced privacy and protection in my environment. Also leveraged Home Assistant's CLI to manage scripts and troubleshoot any issues that arose during the development process.</p>
                    <li>Technologies: Home Assistant, Raspberry Pi, CLI of Home Assistant, VS code, Google/Apple LG/Tile prebuilt API's, Tuya/Goove/WeMo custom-built API's, and Let's Encrypt.</li>
                </ul>
            </div>

        </div>
    );
}

export default Projects;
