//mobile menubar 
let menubtn = document.getElementById('Menubtn');
const matchwidth = window.matchMedia('(max-width:1050px)');
menubtn.addEventListener('click', function () {
  document.querySelector('body').classList.toggle('mobile-nav-active');
  this.classList.toggle('fa-xmark');
  if (!matchwidth.matches)
    document.querySelector('main').classList.toggle('mobile-section-active');
})
//typing effect
let typed = new Typed('.auto-input', {
  strings: ['Front-End Developer', 'Android Developer', 'Back-End Developer', 'Problem Solver'],
  typeSpeed: 35,
  backSpeed: 30,
  backDelay: 2000,
  loop: true,
})

let navLinks = document.querySelectorAll('nav ul li a');
let sections = document.querySelectorAll('section');
window.addEventListener('scroll', function () {
  const scrollPos = window.scrollY
  sections.forEach(section => {
    if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
          link.classList.add('active')
        }
      });
    }
  });
});
//fill projects section

// var projects = [
//   {
//     img: "project_images/weatherapp.jpg",
//     title: "Weather App",
//     description: "It can show weather of any searched location",
//     demolink: "https://weatherapp-qaxgur3y4-brijesh2001singh.vercel.app/"
//   },
//   {
//     img: "project_images/tts.webp",
//     title: "Text ⇌ Speech",
//     description: "This website can convert text to speech and vice versa",
//     demolink: "https://gilded-fudge-31576a.netlify.app/"
//   },
//   {
//     img: "project_images/braingames.jpg",
//     title: "Brain Game",
//     description: "small game where you have to remember color pattern and tap the right color tab",
//     demolink: "https://github.com/BRijesh2001singh/Brain-Game/tree/main/brain%20game"
//   },
//   {
//     img: "project_images/qe.jpg",
//     title: "Quadratic equation solver",
//     description: "An Android project which can help in solving complex Quadratic equations",
//     demolink: "https://github.com/BRijesh2001singh/Quadratic-Eqaution-Solver-Android-"
//   },
//   {
//     img: "project_images/face-recognition.webp",
//     title: "Face Detection",
//     description: "Detects face",
//     demolink: "https://642adf7495a9892b9147a0e5--benevolent-lebkuchen-337b1c.netlify.app/"
//   },
//   {
//     img: "project_images/bookstore.jpg",
//     title: "Book Store",
//     description: "Uses Mern stack to perform CURD operation and update books in database",
//     demolink: "https://chimerical-puffpuff-55489b.netlify.app/"
//   },
//   {
//     img: "project_images/user.jpg",
//     title: "User OTP Authentication Backend",
//     description: "Allows user to log-in , sign-in and verifies user from the database using OTP verification",
//     demolink: "https://github.com/BRijesh2001singh/userauthbackend"
//   },
//   {
//     img: "project_images/tictac.png",
//     title: "TIC-TAC GAME",
//     description: "Simple X and O game in react",
//     demolink: "https://tic-tac-game-ten.vercel.app/"
//   },
// ]



// var items = "";
// projects.forEach(function (elem, ind) {
//   items += `
//   <div class="port-img port-img1" id=${ind}>
//       <img src=${elem.img}  alt="...">
//   </div>
//   <div class="port-info">
//       <h4>${elem.title}</h4>
//       <p>${elem.description}</p>
//       <a href=${elem.demolink} target="_blank"><i
//               class="fa-solid fa-up-right-from-square"></i></a>
//   </div>`
// })
// console.log(items);
// document.querySelector("#projectnum").innerHTML = items;