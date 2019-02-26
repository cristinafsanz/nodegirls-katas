// Variables

let templateSlctr = document.querySelector(".main");

// Functions

/**
 * Returns each cat's HTML template.
 * @param {string} name - The cat name.
 * @param {string} url - The cat photo url.
 * @return {string} - HTML template
 */
function kittenTemplate(name, url) {
  return `<article class="kitten">
    <p> Meet ${name} the kitten!</p>
    <img class="${name}Pic" src="${url}" alt="${name} the Kitten">
    <p>You've clicked <span class="count">0</span> times!</p>
    </article>`;
}

const kittenList = [{
  name: "Chewie",
  url: "https://farm3.staticflickr.com/2298/2290467335_89067c7b51_b.jpg"
},
{
  name: "Xuxa",
  url: "https://farm2.staticflickr.com/1385/624194179_c74556358c_b.jpg"
},
{
  name: "Twisty",
  url: "https://farm5.staticflickr.com/4852/32848656988_7cd4d2aac1_b.jpg"
},
{
  name: "Blackie",
  url: "https://farm8.staticflickr.com/7917/46803486791_5394c66627_b.jpg"
},
{
  name: "Bandie",
  url: "https://farm5.staticflickr.com/4908/46486463521_c551fa6c84_b.jpg"
}
];

const kittenListSlctr = document.querySelector(".navbar ul");
const navbarContent = kittenList.map(kitten => `<li data-url="${kitten.url}" data-name="${kitten.name}">${kitten.name} 🐱</li>`).join("");
kittenListSlctr.innerHTML = navbarContent;


// Events

// Click counter
document.querySelector('.main').addEventListener('click', evt => {
  if (evt.target.nodeName === 'IMG') {
    const countSlctr = event.target.parentNode.querySelector(".count")
    let counter = parseInt(countSlctr.innerText);
    countSlctr.innerText = counter + 1;
  }
});

// Menu event
kittenListSlctr.addEventListener('click', evt => {
  if (evt.target.nodeName === 'LI') {
    const name = evt.target.dataset.name;
    const url = evt.target.dataset.url;
    templateSlctr.innerHTML = kittenTemplate(name, url);
  }
});