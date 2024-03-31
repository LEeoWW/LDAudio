document.addEventListener("DOMContentLoaded", function() {
     // 获取菜单链接
     let links = document.querySelectorAll(".dropdown-content a");
     // 获取标题和描述元素


     let menu = document.querySelector(".menu");
     let galeria = document.querySelector(".galeria");
     let otras = document.querySelector(".otras");


     let title1 = document.querySelector(".title1");
     let descr1 = document.querySelector(".description1");
     let title2 = document.querySelector(".title2");
     let descr2 = document.querySelector(".description2");
 
     // 为每个菜单链接添加点击事件监听器
     links.forEach(link => {
         link.addEventListener("click", () => {
             // 删除现有的活动类
             document.querySelector(".dropdown-content .active").classList.remove("active");
             // 将点击的链接设置为活动类
             link.classList.add("active");
 
             // 获取链接的语言属性值
             let language = link.getAttribute("language");
 
             // 根据语言属性值更新标题和描述
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
         otras:"otras",
         title1: "¿Quiénes somos?",
         description1: "Somos Equipo LightDrop, formado por estudiantes de 2º de Bachillerato del instituto IES Barri del Carme.Tutora:Gracia Gil.Capitana:Ziyan Wang.Mienmbros del equipo: Melanie Bravo, Darío García, Mae Hefty, Soraya Navarro, Zixuan Wang.",
         title2:"¿Qué es lo que hacemos?",
         description2:"Estamos haciendo una recreación de la ciudad de las artes y ciencias situada en Valencia,además incluyendo diseños e instalaciones más inclusivas,modernas y avanzadas.",
     },
     valencianoMain: {
          menu:"menú",
          galeria:"galeria",
          otras:"altres",
         title1: "¿Quin som?",
         description1: "Somos Equipo LightDrop, formado por estudiantes de 2º de Bachillerato del instituto IES Barri del Carme.Tutora:Gracia Gil.Capitana:Ziyan Wang.Mienmbros del equipo: Melanie Bravo, Darío García, Mae Hefty, Soraya Navarro, Zixuan Wang.",
         title2:"¿Qué es el que fem?",
         description2:"Estamos haciendo una recreación de la ciudad de las artes y ciencias situada en Valencia,además incluyendo diseños e instalaciones más inclusivas,modernas y avanzadas.",
     },  
     englishMain: {
          menu:"menu",
          galeria:"gallery",
          otras:"others",
         title1: "Who we are?",
         description1: "We are LightDrop Team, formed by students of 2nd year of Baccalaureate of the institute IES Barri del Carme.Tutor: Gracia Gil.Captain: Ziyan Wang.Members of the team: Melanie Bravo, Darío García, Mae Hefty, Soraya Navarro, Zixuan Wang.",
         title2:"¿What we do?",
         description2:"Estamos haciendo una recreación de la ciudad de las artes y ciencias situada en Valencia,además incluyendo diseños e instalaciones más inclusivas,modernas y avanzadas.",
     }
 };