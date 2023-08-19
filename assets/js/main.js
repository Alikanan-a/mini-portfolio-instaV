// /*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tc => {
      tc.classList.remove('filters__active')
    })
    target.classList.add('filters__active')
    tabs.forEach(t => {
      t.classList.remove('filter-tab-active')
    })
    tab.classList.add('filter-tab-active')
  })
});
// <!--=============== colors ===============-->
const blue = document.querySelector('#blue')
const purple = document.querySelector('#purple')
const pink = document.querySelector('#pink')
const teal = document.querySelector('#teal')
const red = document.querySelector('#red')
const orange = document.querySelector('#orange')
const brown = document.querySelector('#brown')
const gray = document.querySelector('#gray')
const body = document.querySelector('body')


$(function () {
  $(window).on('beforeunload', function(){
    $(window).scrollTop(0);
  });
  $('#purple').click(function (e) {
    e.preventDefault()
    $("body").removeClass('blue');
    $("body").removeClass('pink');
    $("body").removeClass('teal');
    $("body").removeClass('red');
    $("body").removeClass('orange');
    $("body").removeClass('brown');
    $("body").removeClass('gray');
    $('body').addClass('purple')
  })
  $('#blue').click(function (e) {
    e.preventDefault()
    $("body").removeClass('purple');
    $("body").removeClass('pink');
    $("body").removeClass('teal');
    $("body").removeClass('red');
    $("body").removeClass('orange');
    $("body").removeClass('brown');
    $("body").removeClass('gray');
    $('body').addClass('blue')
  })
  $('#pink').click(function (e) {
    e.preventDefault()
    $("body").removeClass('purple');
    $("body").removeClass('blue');
    $("body").removeClass('teal');
    $("body").removeClass('red');
    $("body").removeClass('orange');
    $("body").removeClass('brown');
    $("body").removeClass('gray');
    $('body').addClass('pink')
  })
  $('#teal').click(function (e) {
    e.preventDefault()
    $("body").removeClass('purple');
    $("body").removeClass('pink');
    $("body").removeClass('blue');
    $("body").removeClass('red');
    $("body").removeClass('orange');
    $("body").removeClass('brown');
    $("body").removeClass('gray');
    $('body').addClass('teal')
  })
  $('#red').click(function (e) {
    e.preventDefault()
    $("body").removeClass('purple');
    $("body").removeClass('pink');
    $("body").removeClass('teal');
    $("body").removeClass('blue');
    $("body").removeClass('orange');
    $("body").removeClass('brown');
    $("body").removeClass('gray');
    $('body').addClass('red')
  })
  $('#orange').click(function (e) {
    e.preventDefault()
    $("body").removeClass('purple');
    $("body").removeClass('pink');
    $("body").removeClass('teal');
    $("body").removeClass('red');
    $("body").removeClass('blue');
    $("body").removeClass('brown');
    $("body").removeClass('gray');
    $('body').addClass('orange')
  })
  $('#brown').click(function (e) {
    e.preventDefault()
    $("body").removeClass('purple');
    $("body").removeClass('pink');
    $("body").removeClass('teal');
    $("body").removeClass('red');
    $("body").removeClass('orange');
    $("body").removeClass('blue');
    $("body").removeClass('gray');
    $('body').addClass('brown')
  })
  $('#gray').click(function (e) {
    e.preventDefault()
    $("body").removeClass('purple');
    $("body").removeClass('pink');
    $("body").removeClass('teal');
    $("body").removeClass('red');
    $("body").removeClass('orange');
    $("body").removeClass('brown');
    $("body").removeClass('blue');
    $('body').addClass('gray')
  })
})
// <!--=============== Jquery ===============-->
// $(function () {
//   let project = true;
//   let skills = false;
//   $("#project").on("click", function () {
//     if (!project) {
//       $(".project-content").fadeIn();
//       $(".skill-content").fadeOut();
//       project = true;
//       skills = false;
//     }
//   });
//   $("#skills").on("click", function () {
//     if (!skills) {
//       $(".skill-content").fadeIn();
//       $(".project-content").fadeOut();
//       project = false;
//       skills = true;
//     }
//   });
// });

// /*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})
// /*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal('.profile__border')
sr.reveal('.profile__name', {
  delay: 500
})
sr.reveal('.profile__profession', {
  delay: 600
})
sr.reveal('.profile__social', {
  delay: 700
})
sr.reveal('.profile__info-group', {
  interval: 100,
  delay: 700
})
sr.reveal('.profile__buttons', {
  delay: 800
})
sr.reveal('.filters__content', {
  delay: 900
})
sr.reveal('.filters', {
  delay: 1000
})

var typingEffect = new Typed(".multiText", {
  strings: ['architecture', 'Designer', 'house-designer'],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500
})


const openButton = document.querySelector('#open-btn')
const openButton1 = document.querySelector('#open-btn1')
const openButton2 = document.querySelector('#open-btn2')
const openButton3 = document.querySelector('#open-btn3')
const openButton4 = document.querySelector('#open-btn4')
const closeButton = document.querySelector('.close-btn')
const modalContainer = document.querySelector('#modal-container')
const modalContainer1 = document.querySelector('#modal-container1')
const modalContainer2 = document.querySelector('#modal-container2')
const modalContainer3 = document.querySelector('#modal-container3')
const modalContainer4 = document.querySelector('#modal-container4')

openButton.addEventListener('click',function(){

    modalContainer.style.display = 'block';
    
})
closeButton.addEventListener('click', () => {

    modalContainer.style.display = 'none';

})
window.addEventListener('click', (e)=> {

    if(e.target === modalContainer){

        modalContainer.style.display = 'none';

    }
    //console.log(e.target)
})





openButton1.addEventListener('click',function(){

  modalContainer1.style.display = 'block';
    
})
closeButton.addEventListener('click', () => {

  modalContainer1.style.display = 'none';

})
window.addEventListener('click', (e)=> {

    if(e.target === modalContainer1){

      modalContainer1.style.display = 'none';

    }
    //console.log(e.target)
})





openButton2.addEventListener('click',function(){

    modalContainer2.style.display = 'block';
    
})

closeButton.addEventListener('click', () => {

    modalContainer2.style.display = 'none';

})

window.addEventListener('click', (e)=> {

    if(e.target === modalContainer2){

        modalContainer2.style.display = 'none';

    }
    //console.log(e.target)
})




openButton3.addEventListener('click',function(){

    modalContainer3.style.display = 'block';
    
})
closeButton.addEventListener('click', () => {

    modalContainer3.style.display = 'none';

})
window.addEventListener('click', (e)=> {

    if(e.target === modalContainer3){

        modalContainer3.style.display = 'none';

    }
    //console.log(e.target)
})





openButton4.addEventListener('click',function(){

    modalContainer4.style.display = 'block';
    
})
closeButton.addEventListener('click', () => {

    modalContainer4.style.display = 'none';

})
window.addEventListener('click', (e)=> {

    if(e.target === modalContainer4){

        modalContainer4.style.display = 'none';

    }
    //console.log(e.target)
})
//   document.getElementById("errorMsg").style.display = "none";
// function validateForm() {
//   let x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
// document.getElementById("errorMsg").style.display = "block";
//     return false;
//   }
// }