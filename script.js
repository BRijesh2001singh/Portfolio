function loadpage() {
    const navlinks = document.querySelectorAll('header nav a');

    navlinks.forEach(links => {
        links.addEventListener('click', (event) => {
            navlinks.forEach(link => link.classList.remove('active'));
            event.target.classList.add('active');
        });
    });
}

window.onload = function () {
    setTimeout(function () {
        document.getElementById('loading').style.display = 'none';
    }, 0);
}
loadpage();

