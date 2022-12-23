
// for header sticky
let headerMainWrap = document.querySelector('.headerMainWrap');
window.addEventListener('scroll', function () {
    headerMainWrap.classList.toggle('sticky', window.scrollY > 0);
})

let themeBtn = document.querySelector('.themeBtn');
let themeSection = document.querySelector('.themeSection');

themeBtn.onclick = function () {
    themeSection.classList.toggle('active');
}

// for theme color
let themeColor = document.querySelectorAll('.themeColor');

themeColor[0].onclick = function () {
    document.body.classList.add('color0');
    document.body.classList.remove('color1');
    document.body.classList.remove('color2');
    document.body.classList.remove('color3');
    document.body.classList.remove('color4');
}

themeColor[1].onclick = function () {
    document.body.classList.remove('color0');
    document.body.classList.add('color1');
    document.body.classList.remove('color2');
    document.body.classList.remove('color3');
    document.body.classList.remove('color4');
}

themeColor[2].onclick = function () {
    document.body.classList.remove('color0');
    document.body.classList.remove('color1');
    document.body.classList.add('color2');
    document.body.classList.remove('color3');
    document.body.classList.remove('color4');
}

themeColor[3].onclick = function () {
    document.body.classList.remove('color0');
    document.body.classList.remove('color1');
    document.body.classList.remove('color2');
    document.body.classList.add('color3');
    document.body.classList.remove('color4');
}

themeColor[4].onclick = function () {
    document.body.classList.remove('color0');
    document.body.classList.remove('color1');
    document.body.classList.remove('color2');
    document.body.classList.remove('color3');
    document.body.classList.add('color4');
}

