console.log("JS file is connected.");

//  Functional Hamburger Menu

const burgerMenu = document.querySelector("#burger");
const menu = document.querySelector("#burger-menu");
const closeButton = document.querySelector("#close-button");


function toggleMenu() {
	menu.classList.toggle("active");
  }

burgerMenu.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);

// Popover for Homepage

const popup =  document.querySelectorAll(".product-tile-button");
const lightBox = document.querySelector("#lightbox");
const content = document.querySelector("#lightbox article");



function togglePopover1() {
popoverContent.classList.toggle("active");
}


let products = [
{
sale: "Summer Sale",
flavour: "Mango-Flavoured Yoghurt",
price: "$2.99"
}, 
{
sale: "Summer Sale",
flavour: "Strawberry-Flavoured Yoghurt",
price: "$2.99"
}, 
{
sale: "Summer Sale",
flavour: "Blueberry-Flavoured Yoghurt",
price: "$2.99"
}, 
{
sale: "Summer Sale",
flavour: "Peach-Flavoured Yoghurt",
price: "$2.99"
}
];

popup.forEach(popup => popup.addEventListener("click", lightboxFill));


function lightboxFill() {
  console.log(products[this.dataset.flavourIndex].flavour);
  console.log(products[this.dataset.flavourIndex].sale);
  console.log(products[this.dataset.flavourIndex].price);

  lightBox.classList.add(`product-tile-cta${this.dataset.flavourIndex}`);
  content.innerHTML = "";

  let saleType = document.createElement("h3");
  saleType.textContent = products[this.dataset.flavourIndex].sale;
  saleType.className = "lb_saletext";
  content.appendChild(saleType);

  let flavourName = document.createElement("h2");
  flavourName.textContent = products[this.dataset.flavourIndex].flavour;
  flavourName.className = "lb_heading";
  content.appendChild(flavourName);

  let salePrice = document.createElement("p");
  salePrice.textContent = products[this.dataset.flavourIndex].price;
  salePrice.className = "lb_paragraph";
  content.appendChild(salePrice);
};

// Matching game on the For-Fun page 

const cows = document.querySelectorAll(".cow");
const targetZones = document.querySelectorAll(".target-zone");

let currentDragged = null;

function dragStart() {
  currentDragged = this;
}

function dragOver(e) {
  e.preventDefault();
}

function dropped(e) {
  e.preventDefault();

  if (!currentDragged) return;

  const cowShape = currentDragged.dataset.shape;
  const barnShape = this.dataset.shape;

  if (cowShape === barnShape) {
    this.appendChild(currentDragged);
    currentDragged.setAttribute("draggable", "false");
    currentDragged = null;
  }
}

cows.forEach(cow => {
  cow.addEventListener("dragstart", dragStart);
});

targetZones.forEach(zone => {
  zone.addEventListener("dragover", dragOver);
  zone.addEventListener("drop", dropped);
});