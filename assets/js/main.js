/*=============== FILTERS TABS ===============*/
const tabs = document.querySelector('[data-target]'),
      tabContents = document.querySelector('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click',() =>{
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tc => { 
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')
    })
});
/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
