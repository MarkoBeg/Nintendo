const toggleBtn = document.querySelector(".btn-open");
const closeBtn = document.querySelector(".btn-close");
const sidenav = document.querySelector(".side-nav");


toggleBtn.addEventListener("click", function () {
   if (sidenav.classList.contains("nav-side")) {
     sidenav.classList.remove("nav-side");
   } else {
     sidenav.classList.add("nav-side");
   }
  
});

closeBtn.addEventListener("click", function () {
  sidenav.classList.remove("nav-side");
});


const dropDown = document.querySelector(".drop-down");
const dropdowncontent = document.querySelector(".dropdown-content");

dropDown = addEventListener("click", function() {
    dropdowncontent.classList.toggle("show-dropdown");
});



