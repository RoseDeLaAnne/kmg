// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener("DOMContentLoaded", () => {
  const city = document.querySelector('.city')
  const searchIcon = document.getElementById('search-icon');
  const cInputAdaptive = document.querySelector('.c-input-adaptive')
  const mailingForm = document.querySelector(".mailing__form");
  const modalThanks = document.querySelector(".modal_thanks");
  const openMenu = document.getElementById('open-menu')
  const menu = document.querySelector('.menu')
  const imSearchingInput = document.getElementById('im-searching')

  searchIcon.addEventListener('click', () => {
    city.classList.add('hide')
    searchIcon.classList.add('hide')
    cInputAdaptive.classList.add('block')
  })

  imSearchingInput.addEventListener('focus', function () {
    document.getElementById('pop-up_calculate-the-cost-desktop').classList.add('block')
  });
  // imSearchingInput.addEventListener('blur', function () {
  //   document.getElementById('pop-up_calculate-the-cost-desktop').classList.remove('block')
  // });

  openMenu.addEventListener('click', () => {
    menu.classList.add('show')
  })

  mailingForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
    modalThanks.classList.add("show");
    document.querySelector(".modal-background").classList.add("show");
    document.body.style.overflow = "hidden";
  });
});
