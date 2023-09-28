// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener("DOMContentLoaded", () => {
  const newsTexts = document.querySelectorAll(".news-text");
  const mailingForm = document.querySelector(".mailing__form");
  const modalThanks = document.querySelector(".modal_thanks");
  const openMenu = document.getElementById('open-menu')
  const menu = document.querySelector('.menu')

  // Define the maximum character limit
  const maxChars = 200;

  newsTexts.forEach((newsText) => {
    if (newsText.textContent.length > maxChars) {
      const truncatedText = newsText.textContent.slice(0, maxChars) + "...";
      newsText.textContent = truncatedText;
    }
  });

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
