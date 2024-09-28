const loadprocess = document.querySelector(".loader-process");
const loadspan = loadprocess.querySelectorAll("span");
window.onload = async function () {
    loadingScreen();
    setTimeout(function () {
        document.getElementById('loading').style.display = 'none';
    }, 3000);

}
document.addEventListener("DOMContentLoaded", function () {
    navBar();
});
function loadingScreen() {


    loadprocess.style.visibility = "hidden";
    let delay = 0;
    setTimeout(() => {
        loadspan.forEach(span => {
            span.style.visibility = "hidden";
            setTimeout(() => {
                span.style.visibility = "visible";
            }, delay)
            delay += 200;
        })
    }, 500)
}


function navBar() {
    const sections = document.querySelectorAll(".section");
    const navbar = document.querySelectorAll(".nav-link");

    window.addEventListener('scroll', () => {
        let currentsection = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 200) {
                currentsection = section.getAttribute("id");
            }
        })
        navbar.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentsection}`) {
                link.classList.add("active");
            }
        })
    })
}
// adding wave animation
const images = document.querySelectorAll('.tech-img img');

images.forEach(image => {
    const delay = Math.random() * 3;
    image.style.animationDelay = `${delay}s`;
})

