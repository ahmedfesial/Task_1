// Step_1 Slider Items | Array. from [ES6 Feature]

var sliderBoxs = Array.from(document.querySelectorAll(".slider-container #Box"));

// console.table(sliderImages);

// Get Number of Slide

var slideCount = sliderBoxs.length;

// console.log(slideCount);

// Set Current Slide

var currentSlide = 1;

// Create Buttons

var nextButtons = document.getElementById("next"); // call from html .. call ById

var backButtons = document.getElementById("back"); // call from html .. Call ById

// Handle Clicks on Buttons

nextButtons.onclick = nextSlide; //  call function
backButtons.onclick = backSlide; // call function

//  Build "Ul"

//Create The Main UL Element


var paginationElement = document.createElement("ul");


// Set ID On Created UL Element

paginationElement.setAttribute("id", "pagination-ul");

// create list items based on slide count

for (var i = 1; i <= slideCount; i++) {
  //  4 Steps

  //create li Element

  var paginationItem = document.createElement("li");

  paginationItem.setAttribute("data-index", i);

  paginationItem.appendChild(document.createTextNode(i));

  paginationElement.appendChild(paginationItem);
}

document.getElementById("indicators").appendChild(paginationElement);

// Get the New  Created UL

var paginationCreatedUl = document.getElementById("pagination-ul");

//Create Function

function nextSlide() {
  if (nextButtons.classList.contains("disabled")) {

    return false;

  } else {

    currentSlide++;

    theChecker();
  }
}

function backSlide() {

  if (backButtons.classList.contains("disabled")) {

    return false;
    
  } else {

    currentSlide--;

    theChecker();

  }
}



var paginationsButtets = Array.from(document.querySelectorAll("#pagination-ul li"));

// Loop though Buttels Items

for (var i = 0; i < paginationsButtets.length; i++) {

  paginationsButtets[i].onclick = function () {

  currentSlide = parseInt(this.getAttribute("data-index"));

  theChecker();

  };
}

//  Create The Checker Function

function theChecker() {

    // Call Function removeAllActive
  removeAllActive();

  sliderBoxs[currentSlide - 1].classList.add("active");

  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  // Check current slide is the frist

  if (currentSlide == 1) {
    backButtons.classList.add("disabled");
  } else {
    backButtons.classList.remove("disabled");   
  }

  if (currentSlide == slideCount) {
    nextButtons.classList.add("disabled");
  } else {
    nextButtons.classList.remove("disabled");
  }
}
theChecker();

//Remove All Classes Actives from Images and Bullets

function removeAllActive() {
  // Loop Through Images
  sliderBoxs.forEach(function (img) {
    img.classList.remove("active");
  });
  paginationsButtets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}
