import React from 'react';
import profilePic from '../assets/profile.jpeg'; // Add your profile picture to the assets folder

const About: React.FC = () => {
  return (
    <div className="about bg-dark text-light min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <img
        src={profilePic}
        alt="Jose L. Martínez"
        className="profile-pic w-40 h-40 rounded-full shadow-lg mb-6"
      />
      <p className="text-lg leading-relaxed text-center max-w-3xl mb-4">
        My name is <span className="text-accent font-semibold">Jose L. Martínez</span>, and I am a 
        <span className="font-semibold"> Full-Stack Developer</span> passionate about building efficient, scalable, and user-focused web applications. 
        My expertise lies in technologies such as 
        <span className="font-semibold">JavaScript</span>, 
        <span className="font-semibold">HTML</span>, 
        <span className="font-semibold">CSS</span>, 
        <span className="font-semibold">React</span>, 
        <span className="font-semibold">Angular</span>, 
        <span className="font-semibold"> TypeScript</span>, 
        <span className="font-semibold">Node.js</span>, 
        <span className="font-semibold">Data Base Management</span>,  and 
        <span className="font-semibold"> REST APIs</span>.
      </p>
      <p className="text-lg leading-relaxed text-center max-w-3xl mb-4">
        My journey in development has been fueled by my love for solving problems and a dedication to delivering
        results. Whether it's front-end design, back-end logic, or database management, I thrive on finding innovative 
        solutions while maintaining a commitment to user experience.
      </p>
      <p className="text-lg leading-relaxed text-center max-w-3xl">
        Outside of coding, I enjoy exploring new technologies, enhancing my skills, and collaborating with others to
        bring creative ideas to life. Feel free to explore my projects, or reach out if you'd like to work together!
      </p>
    </div>
  );
};

export default About;
