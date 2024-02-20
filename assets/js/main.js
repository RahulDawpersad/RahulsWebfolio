var emailInput = document.getElementById('email');
var emailError = document.getElementById('email-error');
var btnSend = document.getElementById('btnSubmit');

emailInput.addEventListener('input', validateEmail);

function validateEmail() {
  let email = emailInput.value;
  let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.]+\.(com|org|net|info|biz|us|uk|ca|au|de)$/i;

  if (!email.match(emailPattern)) {
    emailError.innerHTML = `<div class="alert alert-danger form-group" role="alert">
    Invalid Email Address!
  </div>`;
    emailError.classList.remove('valid');
    emailError.classList.add('error');
    btnSend.disabled = true;
  } else {
    emailError.innerHTML = `<div class="alert alert-success" role="alert">
    Valid Email Address
  </div>`;
    emailError.classList.remove('error');
    emailError.classList.add('valid');
    btnSend.disabled = false;
  }
}

// Form Submission
function submitForm() {
  setTimeout(function() {
    // Reset the form after successful submission
    document.getElementById("contactForm").reset();
  }, 1000); 
}

// Preloader Functionality
setTimeout(function(){
  $('.wrapper').fadeOut();
}, 2500);  

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Intro type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });


  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()

// Blog Functionality
function blog(){
  window.location.href = 'https://www.rahuldawpersad.com/blog.html';
}

// Tooltip Functionality
// Get the icon and tooltip elements
var icon = document.getElementById("icon-info");
var tooltip = document.getElementById("tooltip-info");
var iconTwo = document.getElementById('icon-two');
var projectTwo = document.getElementById('project-span');
var iconThree = document.getElementById('icon-three');
var phpSpan = document.getElementById('php-span');

icon.addEventListener('click', function () {
  tooltip.style.display = (tooltip.style.display === "flex") ? "none" : "flex";
  tooltip.innerHTML = `<div class="alert alert-primary" role="alert">
 My Exam Mark
</div>
`;

})

iconTwo.addEventListener('click', function () {
  projectTwo.style.display = (projectTwo.style.display === "flex") ? "none" : "flex";
  projectTwo.innerHTML = `
  <div class="alert alert-primary alert-two" role="alert">
  I understand the basic concepts of React, such as components, state, and props, and have completed simple projects.
  </div>
`;

})

iconThree.addEventListener('click', function () {
  phpSpan.style.display = (phpSpan.style.display === "flex") ? "none" : "flex";
  phpSpan.innerHTML = `
  <div class="alert alert-primary alert-three" role="alert">
  I am proficient in integrating HTML with PHP and MySQL to create dynamic web applications. 
  Through hands-on experience, I have successfully connected front-end interfaces with back-end functionality, and i'm
  Eager to expand my skills and contribute to innovative web projects
  </div>
`;

})

// On-Scroll Functionality
//create the intersection observer
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry) => {   //it can observe multiple entries at the same time
      console.log(entry)
      if(entry.isIntersecting){
          entry.target.classList.add('show');
      }else{
          entry.target.classList.remove('show');
      }
  });
});
//grab all the elements that have that specific class.
const hiddenElements = document.querySelectorAll('.hidden');

//tell it what to observe
hiddenElements.forEach((el)=> observer.observe(el)); //Tell the observer to observe



// Share Functionality Using the Web Share API
// Check if the Web Share API is supported
if (navigator.share) {
  // Get the share button element
  var shareButton = document.getElementById("shareButton");

  // Add click event listener to the share button
  shareButton.addEventListener("click", function () {
    // Call the Web Share API
    navigator
      .share({
        title: "www.webfolio.co.za",
        text: "Explore my creative world at www.WebFolio.co.za – your go-to destination for a captivating online portfolio or presence. Showcase my work and journey with me in the realm of design. #WebFolio #DesignX #CreativeJourney",
        url: "https://www.webfolio.co.za",
      })
      .then(() => console.log("Shared successfully"))
      .catch((error) => console.error("Error sharing:", error));
  });
} else {
  // Web Share API is not supported, provide fallback or inform the user
  alert(
    "Web Share API is not supported in this browser or on non-HTTPS websites."
  );
}










