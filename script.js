const toggle = document.querySelector('.toggle');
const banner = document.querySelector('.banner');
toggle.onclick = function () {
    toggle.classList.toggle('active');
    banner.classList.toggle('active');
}

function lockA() {
    var xPos = window.scrollX;
    var yPos = window.scrollY;
    window.onscroll = () => {
        window.scroll(xPos, yPos);
    };
}