import React from "react";

function Projects() {
    return (
        <div>
            <h2>Projects</h2>

            <div className="project">
                <h3>ChefBot AI</h3>
                <ul>
                    <li>Product owner of team creating a user-focused application that generates recipes and cooking instructions based on user-input ingredients.</li>
                    <li>Technologies: React, JavaScript, Splide, JSX Element, Functional Component, Hooks in React, React-Router Dom, OpenAI API, Github, and VS Code.</li>
                </ul>
            </div>

            <div className="project">
                <h3>Day Care Management System</h3>
                <ul>
                    <li>Team Lead in developing a full-stack web application to streamline the day-to-day operations for a daycare center.</li>
                    <li>Technologies: Amazon Web Services, Amazon EC2 instance, Amazon S3, Lets Encrypt, PHP, Apache, SQL, HTML, CSS.</li>
                </ul>
            </div>

            <div className="project">
                <h3>Fitness Tracker</h3>
                <ul>
                    <li>Team Lead of 8 members to develop a cross-platform full-stack fitness tracker application to assist individuals in achieving their fitness goals.</li>
                    <li>Technologies: Svelte front-end framework, Python, MongoDB, Github, Heroku, Android studio, RESTful API's, JSON, HTML, CSS, and Bootstrap.</li>
                </ul>
            </div>

            <div className="project">
                <h3>Home Assistant – Personal Project</h3>
                <ul>
                    <li>Implemented and fully configured open source operating system on a Raspberry Pi to manage 9 smart devices across various platforms in once centralized location by integrating prebuilt and custom-built API’s.</li>
                    <li>Technologies: Home Assistant, Raspberry Pi, CLI of Home Assistant, VS code, Google/Apple LG/Tile prebuilt API's, Tuya/Goove/WeMo custom-built API's, and Let's Encrypt.</li>
                </ul>
            </div>

        </div>
    );
}

export default Projects;
