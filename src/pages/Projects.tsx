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
      description: 'Chat-bot Interactivo. Puedes hablarle o escribirle. Desarrollado con Python y Sockets',
      image: 'https://res.cloudinary.com/dmimages/image/upload/v1737917094/chatdroid_x1ffus.jpg',
      url: 'https://chatdroid.onrender.com/'
    },
    {
      title: 'proyman',
      description: 'Herramienta de Project Management para el control del estado de nuestros proyectos. Desarrollado con MERN MongoDB, Express, JavaScript, Nodejs and Swagger',
      image: 'https://res.cloudinary.com/dmimages/image/upload/v1737917851/proyman_hcvamy.jpg',
      url: 'https://proyman.onrender.com/'
    },
    {
      title: 'data-API',
      description: 'API REST-full. Para testeo de API, desarrollado para cualquier tipo de industria o propósito. Desarrollado con MERN MongoDB, Express, JavaScript, Nodejs and Swagger',
      image: 'https://res.cloudinary.com/dmimages/image/upload/v1737918518/data-api_tcfpvz.jpg',
      url: 'https://products-2k1m.onrender.com/doc/'
    },
    {
      title: 'distecalc',
      description: 'Herramienta web para realizar presupuestos y cálculos de de proyectos con exportación de ficheros a Excel. Desarrollado con MERN MongoDB, Express, JavaScript and Nodejs',
      image: 'https://res.cloudinary.com/dmimages/image/upload/v1737919724/distecalc_ijb2et.jpg',
      url: 'https://distecalc.netlify.app/'
    },
    {
      title: 'sharedden',
      description: 'Portal inmoviliario para busqueda de pisos/casas para compartir. Desarrollado con MERN MongoDB, Express, JavaScript and Nodejs',
      image: 'https://res.cloudinary.com/dmimages/image/upload/v1737930689/sharedden_a8quf2.jpg',
      url: '#'
    },
  ];

  const projectData2 = [
    {
      title: 'Games Review',
      description: 'Aplicación Android que permite ver los últimos juegos lanzados por las diferentes plataformas y sus principales características y ratios de los jugadores. Desarrollado con Ionic y Ángular',
      image: 'https://res.cloudinary.com/dmimages/image/upload/v1737928630/games-review_tsjdmp.jpg',
      url: 'https://play.google.com/store/apps/details?id=com.developmentmartinez.gamereview'
    },
    {
      title: 'Busca-Gif',
      description: 'Aplicación Android que nos permite encontrar gifs por una palabra clave. Desarrollado con Ionic y Ángular',
      image: 'https://res.cloudinary.com/dmimages/image/upload/v1737931060/busca-gif_h2hr5y.jpg',
      url: 'https://play.google.com/store/apps/details?id=com.developmentmartinez.giffinder'
    },
    {
      title: 'GuiaTV-pelis y series',
      description: 'Aplicación Android  que nos permite ver las últimas películas y series actualmente en al aire, asi como el reparto y sipnosis. Desarrollada con Ionic y Ángular',
      image: 'https://res.cloudinary.com/dmimages/image/upload/v1737931510/GuiaTV-pelis_y_series_nzkban.jpg',
      url: 'https://chatdroid.onrender.com/'
    },
    {
      title: 'MyFinApp',
      description: 'Aplicación Application para finanzas personales, control de gastos, presupuestos, etc. Desarrollada con Ionic, Angular y MongoDB',
      image: 'https://res.cloudinary.com/dmimages/image/upload/v1738095040/myfinapp_qfwtpi.png',
      url: '#'
    },
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
          <a href={project.url} target="_blank"><img src={project.image} alt="Project 1" className="w-full h-40 mt-4 object-cover" /></a>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
