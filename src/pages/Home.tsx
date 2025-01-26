import profilePic from '../assets/profile.jpeg'; 

const Home: React.FC = () => {
  return (
    <div className="home bg-dark text-light min-h-screen flex flex-col items-center justify-center p-6">
      <img
        src={profilePic}
        alt="Profile"
        className="profile-pic w-40 h-40 rounded-full shadow-lg mb-6"
      />
      <h1 className="text-4xl font-bold mb-4 ">Welcome to My Portfolio</h1>
      <p className="text-lg leading-relaxed text-center max-w-2xl mb-6">
        Hi, I'm <span className="text-accent font-semibold">Jose L. Martínez</span>, a passionate and detail-oriented <strong>Full-Stack Developer</strong>. I specialize in modern web technologies like <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Node.js</strong>. Let’s craft innovative, scalable, and user-focused web applications together.
      </p>
      <p className="text-center max-w-2xl text-lg">
        Explore my projects, learn more about my journey, or get in touch for collaborations.
      </p>
    </div>
  );
};

export default Home;
