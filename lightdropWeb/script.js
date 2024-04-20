document.addEventListener("DOMContentLoaded", function() {
     
     let links = document.querySelectorAll(".dropdown-content a");
     


     let menu = document.querySelector(".menu");
     let galeria = document.querySelector(".galeria");
     let otras = document.querySelector(".otras");


     let title1 = document.querySelector(".title1");
     let descr1 = document.querySelector(".description1");
     let title2 = document.querySelector(".title2");
     let descr2 = document.querySelector(".description2");
 
 
     links.forEach(link => {
         link.addEventListener("click", () => {
             
             document.querySelector(".dropdown-content .active").classList.remove("active");
             
             link.classList.add("active");
 
            
             let language = link.getAttribute("language");
 
          
             title1.textContent = data[language].title1;
             descr1.textContent = data[language].description1;
             title2.textContent = data[language].title2;
             descr2.textContent = data[language].description2;
             menu.textContent = data[language].menu;
             galeria.textContent = data[language].galeria;
             otras.textContent = data[language].otras;
         });
     });
 });
 
 let data = {
     espanyolMain: {
         menu:"menú",
         galeria:"galería",
         otras:"nuevas",
         title1: "¿Quiénes somos?",
         description1: "Somos Equipo Lightdrops, formado por estudiantes de 2º de Bachillerato del instituto IES Barri del Carme.Tutora:Gracia Gil.Capitana:Ziyan Wang.Mienmbros del equipo: Melanie Bravo, Darío García, Mae Hefty, Soraya Navarro, Zixuan Wang.",
         title2:"¿Qué es lo que hacemos?",
         description2:"Estamos haciendo una recreación de la ciudad de las artes y ciencias situada en Valencia,además incluyendo diseños e instalaciones más inclusivas,modernas y avanzadas.",
     },
     valencianoMain: {
          menu:"menú",
          galeria:"galeria",
          otras:"noves",
         title1: "¿Qui som?",
         description1: "Som Equip Lightdrops, format per estudiants de 2n de Batxillerat de l'institut IES Barri del Carme.Tutora:Gracia Gil.Capitana:Ziyan Wang.Membres de l'equip: Melanie Bravo, Darío García, Mae Hefty, Soraya Navarro, Zixuan Wang.",
         title2:"¿Qué es el que fem?",
         description2:"Estem fent una recreació de la ciutat de les arts i ciències situada a València,a més incloent dissenys i instal·lacions més inclusives,modernes i avançades.",
     },  
     englishMain: {
          menu:"menu",
          galeria:"gallery",
          otras:"news",
         title1: "Who we are?",
         description1: "We are Team Lightdrops, formed by students of the 2nd year of high school IES Barri del Carme.tutor:Gracia Gil.captain:Ziyan Wang.team members: Melanie Bravo, Darío García, Mae Hefty, Soraya Navarro, Zixuan Wang.",
         title2:"¿What we do?",
         description2:"We are making a recreation of the city of arts and sciences located in Valencia, also including more inclusive, modern and advanced designs and facilities.",
     },








     espanyolUmb: {
          menu:"menú",
          galeria:"galería",
          otras:"nuevas",
          description1: "L'umbracle («el umbráculo» en valenciano) es un paseo ajardinado y zona expositiva con vistas a todo el complejo de la Ciudad de las Artes y de las Ciencias, que alberga en su interior un gran aparcamiento. Presenta vegetación propia de la región mediterránea, de la Comunitat Valenciana y de países tropicales, que varía a lo largo de las estaciones del año, y donde además existe una interesante muestra de esculturas contemporáneas en el Paseo del Arte, de libre acceso. También en el Umbracle los visitantes pueden pasear mientras aprenden astronomía en el interesante 'Jardín de Astronomía",
          description2:"   L´Umbracle es un parque que simula un entorno tropical con palmeras, proporcionando un espacio de descanso y entretenimiento inclusivo para personas de todas las edades. Los tres Arduinos integrados en esta área desempeñan funciones específicas: el primero monitorea la calidad del aire, el segundo crea un instrumento musical basado en la kalimba, adaptado para ser accesible para personas con discapacidad visual, auditiva y de desarrollo, y el tercero gestiona un banco inteligente con una pantalla LED que ofrece información sobre el tiempo para brindar entretenimiento y orientación temporal a personas mayores.",
      },
      valencianoUmb: {
           menu:"menú",
           galeria:"galeria",
           otras:"noves",
          description1: "L'umbracle és un passeig enjardinat i zona expositiva amb vista a tot el complex de la Ciutat de les Arts i de les Ciències, que alberga en el seu interior un gran aparcament. Presenta vegetació pròpia de la regió mediterrània, de la Comunitat Valenciana i de països tropicals, que varia al llarg de les estacions de l'any, i on a més existix una interessant mostra d'escultures contemporànies en el Passeig de l'Art, de lliure accés. També en el *Umbracle els visitants poden passejar mentres aprenen astronomia en l'interessant 'Jardí d'Astronomia",
          description2:" és un parc que simula un entorn tropical amb palmeres, proporcionant un espai de descans i entreteniment inclusiu per a persones de totes les edats. Els tres *Arduinos integrats en esta àrea exercixen funcions específiques: el primer monitora la qualitat de l'aire, el segon crea un instrument musical basat en la *kalimba, adaptat per a ser accessible per a persones amb discapacitat visual, auditiva i de desenvolupament, i el tercer gestiona un banc intel·ligent amb una pantalla LED que oferix informació sobre el temps per a brindar entreteniment i orientació temporal a persones majors.",
      },  
      englishUmb: {
           menu:"menu",
           galeria:"gallery",
           otras:"news",
          description1: "L'umbracle is a landscaped walkway and exhibition area overlooking the entire complex of the City of Arts and Sciences, which houses a large parking lot inside. It has vegetation typical of the Mediterranean region, the Valencian Community and tropical countries, which varies throughout the seasons, and where there is also an interesting display of contemporary sculptures in the Paseo del Arte (Art Walk), which is freely accessible. Also in the Umbracle, visitors can stroll around while they learn about astronomy in the interesting Garden of Astronomy.",     
          description2:"L'Umbracle is a park that simulates a tropical environment with palm trees, providing an inclusive rest and entertainment space for people of all ages. The three Arduinos integrated in this area perform specific functions: the first monitors air quality, the second creates a musical instrument based on the kalimba, adapted to be accessible for people with visual, hearing and developmental disabilities, and the third manages a smart bench with an LED display offering weather information to provide entertainment and time orientation for seniors.",
      },







      espanyolHem: {
          menu:"menú",
          galeria:"galería",
          otras:"nuevas",
          description1: "L'Hemisfèric (en castellano, El Hemisférico) fue el primer edificio abierto al público de la Ciudad de las Artes y las Ciencias de Valencia (España) el 16 de abril de 1998. Es un edificio neofuturista diseñado por Santiago Calatrava con analogía de un ojo, que en su interior alberga una gran sala con una pantalla cóncava.",
          description2:"   El Hemisférico, reimaginado por el equipo, se convierte en una zona dedicada a la música, la iluminación y la sostenibilidad. Se instalan placas solares para aprovechar la energía solar y garantizar un funcionamiento más eficiente y respetuoso con el medio ambiente.",
      },
      valencianoHem: {
           menu:"menú",
           galeria:"galeria",
           otras:"noves",
          description1: "L'Hemisfèric va ser el primer edifici obert al públic de la Ciutat de les Arts i les Ciències de València (Espanya) el 16 d'abril de 1998. És un edifici *neofuturista dissenyat per Santiago Calatrava amb analogia d'un ull, que en el seu interior alberga una gran sala amb una pantalla còncava.",
          description2:" L'Hemisfèric, reimaginat per l'equip, es convertix en una zona dedicada a la música, la il·luminació i la sostenibilitat. S'instal·len plaques solars per a aprofitar l'energia solar i garantir un funcionament més eficient i respectuós amb el medi ambient.",
      },  
      englishHem: {
           menu:"menu",
           galeria:"gallery",
           otras:"news",
          description1: "L'Hemisfèric (in Spanish, El Hemisférico) was the first building opened to the public in the City of Arts and Sciences of Valencia (Spain) on April 16, 1998. It is a neo-futuristic building designed by Santiago Calatrava with the analogy of an eye, which inside houses a large room with a concave screen.",
          description2:"The Hemisferico, reimagined by the team, becomes an area dedicated to music, lighting and sustainability. Solar panels are installed to harness solar energy and ensure a more efficient and environmentally friendly operation.",
      },





      espanyolCasco: {
          menu:"menú",
          galeria:"galería",
          otras:"nuevas",
          description1: "El Palau de les Arts Reina Sofía es el teatro de la ópera de estilo neofuturista de Valencia (España), y sede de la Orquesta de la Comunidad Valenciana. Es obra de Santiago Calatrava y forma parte del complejo arquitectónico de la Ciudad de las Artes y las Ciencias. Fue inaugurado el 8 de octubre de 2005. La primera ópera se interpretó el 25 de octubre de 2006, eligiéndose para la ocasión Fidelio, de Beethoven.",
          description2:"Dispone de plataformas en voladizo a diferentes alturas, con paseos y vegetación, a las que se accede mediante ascensores panorámicos y escaleras situadas en el interior de las carcasas metálicas que hay a ambos lados del edificio. El contraste entre lo opaco de las carcasas de chapa de acero y la transparencia de los vastos espacios acristalados produce sensaciones cambiantes.",
      },
      valencianoCasco: {
           menu:"menú",
           galeria:"galeria",
           otras:"noves",
          description1: "El Palau de les Arts Reina Sofia és el teatre de l'òpera d'estil neofuturista de València (Espanya), i seu de l'Orquestra de la Comunitat Valenciana. És obra de Santiago Calatrava i forma part del complex arquitectònic de la Ciutat de les Arts i les Ciències. Va ser inaugurat el 8 d'octubre de 2005. La primera òpera es va interpretar el 25 d'octubre de 2006, triant-se per a l'ocasió *Fidelio, de Beethoven.",
          description2:" La Reina Sofia s'adapta per a albergar l'oficina de l'ONCE, conservant el seu disseny original mentres es reutilitza per a brindar servicis i suport a la comunitat, especialment a persones amb discapacitat visual.",
      },  
      englishCasco: {
           menu:"menu",
           galeria:"gallery",
           otras:"news",
          description1: "The Palau de les Arts Reina Sofía is the neo-futurist style opera house in Valencia (Spain), and home of the Orquesta de la Comunidad Valenciana. It was designed by Santiago Calatrava and is part of the architectural complex of the City of Arts and Sciences. It was inaugurated on October 8, 2005. The first opera was performed on October 25, 2006, choosing Beethoven's Fidelio for the occasion.",
          description2:"  The Reina Sofia is adapted to house the ONCE office, preserving its original design while reusing it to provide services and support to the community, especially to the visually impaired.

",
      },





      espanyolOtras: {
          menu:"menú",
          galeria:"galería",
          otras:"nuevas",
          title1: "¿Quiénes somos?",
          description1: " Esta área verde cuenta con dos Arduinos que cumplen funciones específicas: uno controla el sistema de luces, ajustándose según la intensidad solar para promover el ahorro de energía y la seguridad nocturna, especialmente para mujeres, mientras que el otro actúa como sensor de distancia para ayudar a las personas ciegas a navegar por el entorno. Además, el diseño del parque incorpora elementos arquitectónicos de diversas culturas y una variedad de árboles para mejorar la calidad del aire y proporcionar un entorno natural agradable.",
          title2:"¿Qué es lo que hacemos?",
          description2:"  El puente sirve como una importante vía de transporte y está equipado con un Arduino que utiliza un sistema de sensores de color para indicar los cambios en el semáforo de una manera accesible para conductores daltónicos, asegurando una conducción más segura y sin barreras. La arpa es una combinación de la música y la arquitectura que funciona con láser. ",
          description3:"",
      },
      valencianoOtras: {
           menu:"menú",
           galeria:"galeria",
           otras:"noves",
          title1: "¿Quin som?",
          description1: "Esta àrea verda compta amb dos Arduinos que complixen funcions específiques: un controla el sistema de llums, ajustant-se segons la intensitat solar per a promoure l'estalvi d'energia i la seguretat nocturna, especialment per a dones, mentres que l'altre actua com a sensor de distància per a ajudar les persones cegues a navegar per l'entorn. A més, el disseny del parc incorpora elements arquitectònics de diverses cultures i una varietat d'arbres per a millorar la qualitat de l'aire i proporcionar un entorn natural agradable.",
          title2:"¿Qué es el que fem?",
          description2:" El pont servix com una important via de transport i està equipat amb un *Arduino que utilitza un sistema de sensors de color per a indicar els canvis en el semàfor d'una manera accessible per a conductors daltònics, assegurant una conducció més segura i sense barreres. L'arpa és una combinació de la música i l'arquitectura que funciona amb làser.",
           description3:"",
      },  
      englishOtras: {
           menu:"menu",
           galeria:"gallery",
           otras:"news",
          title1: "Who we are?",
          description1: "This green area has two Arduinos that fulfill specific functions: one controls the lighting system, adjusting according to solar intensity to promote energy saving and night safety, especially for women, while the other acts as a distance sensor to help blind people to navigate their environment. Additionally, the park's design incorporates architectural elements from various cultures and a variety of trees to improve air quality and provide a pleasant natural environment.",
          title2:"¿What we do?",
          description2:"The bridge serves as a major transportation route and is equipped with an Arduino that uses a color sensor system to indicate traffic light changes in a way accessible to color-blind drivers, ensuring safer, barrier-free driving. The harp is a laser-powered combination of music and architecture.",
           description3:"",
      },









      espanyolGal: {
          menu:"menú",
          galeria:"galería",
          otras:"nuevas",
          title1: "¿Quiénes somos?",
          description1: "Somos Equipo LightDrop, formado por estudiantes de 2º de Bachillerato del instituto IES Barri del Carme.Tutora:Gracia Gil.Capitana:Ziyan Wang.Mienmbros del equipo: Melanie Bravo, Darío García, Mae Hefty, Soraya Navarro, Zixuan Wang.",
          title2:"¿Qué es lo que hacemos?",
          description2:"Estamos haciendo una recreación de la ciudad de las artes y ciencias situada en Valencia,además incluyendo diseños e instalaciones más inclusivas,modernas y avanzadas.",
      },
      valencianoGal: {
           menu:"menú",
           galeria:"galeria",
           otras:"noves",
          title1: "¿Quin som?",
          description1: "Somos Equipo LightDrop, formado por estudiantes de 2º de Bachillerato del instituto IES Barri del Carme.Tutora:Gracia Gil.Capitana:Ziyan Wang.Mienmbros del equipo: Melanie Bravo, Darío García, Mae Hefty, Soraya Navarro, Zixuan Wang.",
          title2:"¿Qué es el que fem?",
          description2:"Estamos haciendo una recreación de la ciudad de las artes y ciencias situada en Valencia,además incluyendo diseños e instalaciones más inclusivas,modernas y avanzadas.",
      },  
      englishGal: {
           menu:"menu",
           galeria:"gallery",
           otras:"news",
          title1: "Who we are?",
          description1: "We are LightDrop Team, formed by students of 2nd year of Baccalaureate of the institute IES Barri del Carme.Tutor: Gracia Gil.Captain: Ziyan Wang.Members of the team: Melanie Bravo, Darío García, Mae Hefty, Soraya Navarro, Zixuan Wang.",
          title2:"¿What we do?",
          description2:"Estamos haciendo una recreación de la ciudad de las artes y ciencias situada en Valencia,además incluyendo diseños e instalaciones más inclusivas,modernas y avanzadas.",
      }


 };
