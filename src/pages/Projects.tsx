const Projects: React.FC = () => {
  const projectData = [
    {
      title: 'Black Hat Music',
      description: 'Prototipo de una tienda de música en línea. Desarrollado con HTML, JavaScript y CSS. ',
      image: 'https://res.cloudinary.com/dmimages/image/upload/v1737915003/black_hat_music_utzeof.jpg',
      url: ''
    },
    {
      title: 'SleepOutside',
      description: 'Ejemplo de tienda online de venta de equipos de acampada. Desarrollado con HTML, JavaScript y CSS.',
      image: 'https://res.cloudinary.com/dmimages/image/upload/v1737915678/sleep_outside_nha2jt.jpg',
      url: 'https://sleepoutsideproject.netlify.app/'
    },
    {
      title: 'mygifs-finder',
      description: 'Pagina para buscar gifs. Desarrollada con Angular y API REST-full utilizando la API de Giphy',
      image: 'https://res.cloudinary.com/dmimages/image/upload/v1737916240/gifs_finder_jbyon5.jpg',
      url: 'https://mygifs-finder.netlify.app/'
    },
    {
      title: 'codefinder',
      description: 'Pagina de ayuda para programadores, encuentras como aplicar diferentes métodos de programación. Desarrollada con Angular y repositorio local con json',
      image: 'https://res.cloudinary.com/dmimages/image/upload/v1737916654/code-finder_hpowiw.jpg',
      url: 'https://codefinder.netlify.app/'
    },
    {
      title: 'chatdroid',
      description: 'Chat interactivo con escritora y reconocimiento de voz. Desarrollada con Python y Sockets',
      image: 'https://res.cloudinary.com/dmimages/image/upload/v1737917094/chatdroid_x1ffus.jpg',
      url: 'https://chatdroid.onrender.com/'
    },
    {
      title: 'proyman',
      description: 'API REST-full development for any industry or purpose. Developed with Mongobd, Express, JavaScript, Nodejs and Swagger',
      image: 'https://res.cloudinary.com/dmimages/image/upload/v1737918518/data-api_tcfpvz.jpg',
      url: 'https://proyman.onrender.com/'
    },
    {
      title: 'data-API',
      description: 'Chat interactivo con escritora y reconocimiento de voz. Desarrollada con Python y Sockets',
      image: 'https://res.cloudinary.com/dmimages/image/upload/v1737917094/chatdroid_x1ffus.jpg',
      url: 'https://products-2k1m.onrender.com/doc/'
    },
    {
      title: 'chatdroid',
      description: 'Chat interactivo con escritora y reconocimiento de voz. Desarrollada con Python y Sockets',
      image: 'https://res.cloudinary.com/dmimages/image/upload/v1737917094/chatdroid_x1ffus.jpg',
      url: 'https://chatdroid.onrender.com/'
    },
    {
      title: 'chatdroid',
      description: 'Chat interactivo con escritora y reconocimiento de voz. Desarrollada con Python y Sockets',
      image: 'https://res.cloudinary.com/dmimages/image/upload/v1737917094/chatdroid_x1ffus.jpg',
      url: 'https://chatdroid.onrender.com/'
    },
  ];

  const projectData2 = [
    { title: 'Project 1', description: 'Description of Project 1' },
    { title: 'Project 2', description: 'Description of Project 2' },
    { title: 'Project 3', description: 'Description of Project 3' },
  ];

  return (
    <div className="projects bg-dark text-light min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
      <div>
        <h2 className="mt-10 mb-2 text-xl">Web Applications</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.url} target="_blank"><img src={project.image} alt="Project 1" className="w-full h-40 mt-4 object-cover" /></a>
          </div>
        ))}
      </div>
      <div>
        <h2 className="mt-10 mb-2 text-xl">Mobile Apps</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData2.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
