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
