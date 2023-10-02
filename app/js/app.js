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

  // imSearchingInput.addEventListener('focus', function () {
  //   document.getElementById('pop-up_calculate-the-cost-desktop').classList.add('block')
  // });
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

  const popUpHeaderCalc = document.getElementById('pop-up_calculate-the-cost-desktop-header');

  // Function to handle clicks outside the trigger button
  function handleClickOutside(event) {
      if (!imSearchingInput.contains(event.target) && !popUpHeaderCalc.contains(event.target)) {
          popUpHeaderCalc.classList.remove('block')
      }

      if (!modalThanks.contains(event.target)) {
        modalThanks.classList.remove("show");
        document.querySelector(".modal-background").classList.remove("show");
        document.body.style.overflow = "auto";
      }

      // if (!document.querySelector('.modal_leave-a-request').contains(event.target) && document.querySelector('.modal_leave-a-request').classList.contains('hidden')) {
      //   console.log('trigger')
      //   document.querySelector('.modal_leave-a-request').classList.remove("block");
      //   document.querySelector(".modal-background-2").classList.remove("show");
      //   document.body.style.overflow = "auto";
      // }

      // if (document.querySelector('.modal_leave-a-request').classList.contains('block')) {
      //   console.log('hello')
      // }
  }

  imSearchingInput.addEventListener('focus', function () {
    popUpHeaderCalc.classList.add('block')
  });

  // Add a click event listener to the document to handle clicks outside
  document.addEventListener('click', handleClickOutside);
});
