import React from 'react';
import profilePic from '../assets/profile.jpeg'; // Add your profile picture to the assets folder

const About: React.FC = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img src={profilePic} alt="Jose L. Martínez" className="profile-pic" />
      <p>
        My name is <strong>Jose L. Martínez</strong>, and I am a <strong>Full-Stack Developer</strong> with a passion 
        for creating efficient, scalable, and user-focused web applications. I specialize in modern web technologies such as 
        <strong>React</strong>, <strong>TypeScript</strong>, <strong>Node.js</strong>, and <strong>REST APIs</strong>.
      </p>
      <p>
        My journey in development has been driven by a commitment to excellence and a love for solving problems. I thrive 
        in environments that challenge me to innovate, optimize performance, and deliver intuitive user experiences. Whether 
        it's front-end design, back-end logic, or database management, I approach every project with attention to detail and 
        a focus on results.
      </p>
      <p>
        When I'm not coding, I enjoy learning about new technologies, exploring creative design ideas, and finding ways to 
        improve both my technical and soft skills. I take pride in my ability to work collaboratively while maintaining 
        a proactive and self-driven approach to tasks.
      </p>
      <p>
        Feel free to explore my portfolio, and don’t hesitate to reach out if you’d like to collaborate or learn more 
        about my work.
      </p>
    </div>
  );
};

export default About;
