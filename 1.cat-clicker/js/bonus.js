// Variables

let templateSlctr = document.querySelector(".main");

// Functions

/**
 * Returns each cat's HTML template.
 * @param {string} name - The cat name.
 * @param {string} url - The cat photo url.
 * @return {string} - HTML template
 */
function kittenTemplate(name, url, clicks) {
  return `<article class="kitten">
    <p> Meet ${name} the kitten!</p>
    <img class="${name}Pic" src="${url}" alt="${name}the Kitten" id="${name}">
    <p>You've clicked <span class="count">${clicks}</span> times!</p>
    </article>`;
}

function getNumberOfClicks(name) {
  let numberofClicks;
  kittenList.forEach(kittenObj => {
    if (kittenObj.name === name) {
      numberofClicks = kittenObj.clicks;
    }
  })
  return numberofClicks;
}

updateKittenList = () => {
  const navbarContent = kittenList.map(kitten => `<li data-url="${kitten.url}" data-name="${kitten.name}"><span class="kitty-count">${kitten.clicks}</span> ${kitten.name} 🐱</li>`).join("");
  kittenListSlctr.innerHTML = navbarContent;
}

const kittenList = [{
  name: "Chewie",
  url: "https://farm3.staticflickr.com/2298/2290467335_89067c7b51_b.jpg",
  clicks: 0
},
{
  name: "Xuxa",
  url: "https://farm2.staticflickr.com/1385/624194179_c74556358c_b.jpg",
  clicks: 0
},
{
  name: "Twisty",
  url: "https://farm5.staticflickr.com/4852/32848656988_7cd4d2aac1_b.jpg",
  clicks: 0
},
{
  name: "Blackie",
  url: "https://farm8.staticflickr.com/7917/46803486791_5394c66627_b.jpg",
  clicks: 0
},
{
  name: "Bandie",
  url: "https://farm5.staticflickr.com/4908/46486463521_c551fa6c84_b.jpg",
  clicks: 0
}
];

const kittenListSlctr = document.querySelector(".navbar ul");

// Events

// Click counter
document.querySelector('.main').addEventListener('click', evt => {
  if (evt.target.nodeName === 'IMG') {
    const countSlctr = event.target.parentNode.querySelector(".count")
    let counter = parseInt(countSlctr.innerText);
    countSlctr.innerText = counter + 1;
    kittenList.forEach(kittenObj => {
      if (kittenObj.name === evt.target.id) {
        kittenObj.clicks++;
      }
    })
    kittenList.sort((a, b) => b.clicks - a.clicks);
    console.log('kittenList', kittenList);
    updateKittenList();
  }
});

// Menu event
kittenListSlctr.addEventListener('click', evt => {
  if (evt.target.nodeName === 'LI') {
    const name = evt.target.dataset.name;
    const url = evt.target.dataset.url;
    const clicks = getNumberOfClicks(name);
    templateSlctr.innerHTML = kittenTemplate(name, url, clicks);
  }
});

// Execute on init
updateKittenList();
