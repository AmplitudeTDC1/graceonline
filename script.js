$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [
      "Caregiver",
      "Singer",
      "Change Agent",
      "Life Coach",
      "Storyteller",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Caregiver",
      "Singer",
      "Change Agent",
      "Life Coach",
      "Storyteller",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycby1XwBgXE2ip2GI5vFo8vBOHiN7QAzxqs2LIhTjX1bqjCO199s6NpfBDOIgwpKORci7SA/exec";

const form = document.forms["message-me"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! Your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});

// Select filter buttons and portfolio items
const filterButtons = document.querySelectorAll(".filter-item");
const posts = document.querySelectorAll(".post");

// Add click event listener to each filter button
filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove 'active' class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add 'active' class to clicked button
    this.classList.add("active");

    // Get filter value from data attribute
    const filterValue = this.getAttribute("data-filter");

    // Loop through portfolio items
    posts.forEach((post) => {
      if (filterValue === "all") {
        post.style.display = "block"; // Show all items
      } else {
        // Check if the item matches the selected filter
        if (post.classList.contains(filterValue)) {
          post.style.display = "block"; // Show matching items
        } else {
          post.style.display = "none"; // Hide non-matching items
        }
      }
    });
  });
});

// Read More popup box activation code
document.addEventListener("DOMContentLoaded", function () {
  const readMoreButtons = document.querySelectorAll(".read-more-btn");
  const popupOverlay = document.querySelector(".popup-overlay");
  const closeBtn = document.querySelector(".close-btn");
  const popupTitle = document.querySelector(".popup-title");
  const popupDescription = document.querySelector(".popup-description");

  readMoreButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".card");
      const title = card.querySelector(".text").textContent;
      const description = card.querySelector(".read-more-cont").innerHTML; // Fetch hidden content

      popupTitle.textContent = title;
      popupDescription.innerHTML = description; // Use innerHTML to preserve formatting
      popupOverlay.classList.add("active");
    });
  });

  closeBtn.addEventListener("click", () => {
    popupOverlay.classList.remove("active");
  });

  popupOverlay.addEventListener("click", (e) => {
    if (e.target === popupOverlay) {
      popupOverlay.classList.remove("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const readMoreBtns = document.querySelectorAll(".read-more-btn");
  const popupGalleryOverlay = document.querySelector(".popup-gallery-overlay");
  const popupGalleryBox = document.querySelector(".popup-gallery-box");
  const galleryContent = document.querySelector(".gallery-content");
  const closeGalleryBtn = document.querySelector(".close-gallery-btn");

  const galleries = {
    "caregiving-gallery": [
      "images/caregiving-thumbnail-1.jpg",
      "images/caregiving-thumbnail-2.jpeg",
      "images/caregiving-3.jpg",
    ],
    "scriptwriting-gallery": [
      "images/scriptwriting-1.jpg",
      "images/scriptwriting-2.jpg",
      "images/scriptwriting-3.jpg",
    ],
    "community-gallery": [
      "images/community-1.jpg",
      "images/community-2.jpg",
      "images/community-3.jpg",
    ],
  };

  readMoreBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const galleryId = btn.getAttribute("data-gallery");
      const images = galleries[galleryId];
      galleryContent.innerHTML = images
        .map((img) => `<img src="${img}" alt="Gallery Image">`)
        .join("");
      popupGalleryOverlay.style.visibility = "visible";
      popupGalleryOverlay.style.opacity = "1";
      popupGalleryBox.style.transform = "translateY(0)";
    });
  });

  closeGalleryBtn.addEventListener("click", function () {
    popupGalleryOverlay.style.visibility = "hidden";
    popupGalleryOverlay.style.opacity = "0";
    popupGalleryBox.style.transform = "translateY(-50px)";
  });

  popupGalleryOverlay.addEventListener("click", function (e) {
    if (e.target === popupGalleryOverlay) {
      popupGalleryOverlay.style.visibility = "hidden";
      popupGalleryOverlay.style.opacity = "0";
      popupGalleryBox.style.transform = "translateY(-50px)";
    }
  });
});
