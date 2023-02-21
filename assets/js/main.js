// /*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click',() =>{
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

// /*=============== SCROLL REVEAL ANIMATION ===============*/



