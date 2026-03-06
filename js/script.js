/* ./js/script.js for 3d-Heather.bauska.org */
// Heather Cox Richardson text.
const heatherSays = `<p>Heather Cox Richardson says, 
The Economist's Middle East correspondent, Greg Carlstrom, noted that Trump appears to be workshopping 
the causes for his attacks on Iran and his goals for the war by talking to journalists.
As Midas Touch summarized Carlstrom's argument, he said, "Trump doesn't sound convinced by any of it. 
He's throwing spaghetti at the wall. Ultimately, I suspect he just wants to say he solved a problem 
that has vexed every American president since Jimmy Carter, but there's no clear idea what that looks 
like and no plan for how to get there. And there are plenty of possible scenarios in which Trump declares 
victory and leaves the region with an absolute mess! -Heather Cox Richardson</p>`;

// Function to insert Heather statements into divs
function insertHeatherIntoDivs() {
  // Get all .text divs
  const textDivs = document.querySelectorAll(".text");

  // Insert Heather statements into all .text divs
  textDivs.forEach((div) => {
    div.innerHTML = heatherSays;
  });
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", insertHeatherIntoDivs);

const contentDiv = document.querySelector(".content");
function adjustContentSize() {
  const viewportWidth = window.innerWidth;
  const baseWidth = 1000;
  const scaleFactor =
    viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.8 : 1;
  contentDiv.style.transform = `scale(${scaleFactor})`;
}
window.addEventListener("load", adjustContentSize);
window.addEventListener("resize", adjustContentSize);
