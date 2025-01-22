import profilePic from '../assets/profile.jpeg'; // Add a profile picture in assets folder

const Home: React.FC = () => {
  return (
    <div className="home">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hi, I'm <strong>Jose L. Martínez</strong>, a passionate and detail-oriented <strong>Full-Stack Developer</strong> 
        with expertise in building modern, responsive, and user-focused web applications. With a solid background in 
        technologies like <strong>React</strong>, <strong>TypeScript</strong>, <strong>Node.js</strong>, and <strong>REST APIs</strong>, 
        I thrive on crafting innovative solutions to complex challenges.
      </p>
      <p>
        Beyond coding, I am committed to creating intuitive user experiences, optimizing performance, and delivering
        scalable applications that meet both client and business needs. Explore my portfolio to see the projects I've worked on, 
        learn more about my journey, or get in touch to discuss how we can collaborate on your next big idea.
      </p>
    </div>
  );
};

export default Home;
