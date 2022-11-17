let navbar = document.querySelector(".first-list").querySelectorAll("a")

navbar.forEach(el => {
	el.addEventListener("click", function() {
		navbar.forEach(nav => nav.classList.remove("active"))

		this.classList.add("active")
	})
})

//Scroller

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 400px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  
}


//Slideshow

/* var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

	var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

	var index = 0, 
    time = 3000;

	slides[index].classList.add('active');

	setInterval( () => {
		slides[index].classList.remove('active');
		
		index++;
		if (index === slides.length) index = 0;

		slides[index].classList.add('active');

	}, time);
} */

/* var whatsappLink = document.getElementById("whatsapp-link")

whatsappLink.onclick = () => {
	location.href = "https://wa.me/2348139525479"
} */


var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modal-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

btn.addEventListener("click", () => {
	modal.style.display = "block"
})

// When the user clicks on <span> (x), close the modal

span.addEventListener("click", () => {
	modal.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



/* const currentLocation = location.href
const menuItem = document.querySelector(".first-list").querySelectorAll("a")
const menuLength = menuItem.length
for (let i = 0; i < menuLength; i++) {
	if (menuItem[i].href === currentLocation) {
		menuItem[i].className = "active"
	};
	
} */

/* const currentLocation = location.href
let navigations = document.querySelectorAll('[data-component="navigation"]')
navigations.forEach(initNavig);
function initNavig(navigation) {
	var slides = document.querySelectorAll(`#${navigation.id} [role="list"] .navv`);
	if (slides[i].href === currentLocation) {
		slides[i].className = "active"
	};
} */