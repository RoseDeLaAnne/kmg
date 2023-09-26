// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener("DOMContentLoaded", () => {
  const newsTexts = document.querySelectorAll(".news-text");

  // Define the maximum character limit
  const maxChars = 200;

  newsTexts.forEach((newsText) => {
    if (newsText.textContent.length > maxChars) {
      const truncatedText = newsText.textContent.slice(0, maxChars) + "...";
      newsText.textContent = truncatedText;
    }
  });
});
