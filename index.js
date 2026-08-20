/* =========================================================
   TESSY GALAXY HOTEL & BAR
   JavaScript
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const navMenu = document.getElementById("navMenu");
const navOverlay = document.getElementById("navOverlay");
const navLinks = document.querySelectorAll(".nav-link");


function openMenu() {
    navMenu.classList.add("open");
    navOverlay.classList.add("show");
    document.body.style.overflow = "hidden";
}


function closeMenu() {
    navMenu.classList.remove("open");
    navOverlay.classList.remove("show");
    document.body.style.overflow = "";
}


menuToggle.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
navOverlay.addEventListener("click", closeMenu);


navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});


/* =========================================================
   STICKY HEADER
========================================================= */

const header = document.getElementById("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =========================================================
   HERO SLIDER
========================================================= */

const heroSlides = document.querySelectorAll(".hero-slide");
const heroDots = document.querySelectorAll(".slide-dots .dot");

const heroNext = document.getElementById("heroNext");
const heroPrev = document.getElementById("heroPrev");

let currentHeroSlide = 0;


function showHeroSlide(index) {

    if (index >= heroSlides.length) {
        currentHeroSlide = 0;
    } else if (index < 0) {
        currentHeroSlide = heroSlides.length - 1;
    } else {
        currentHeroSlide = index;
    }

    heroSlides.forEach(slide => {
        slide.classList.remove("active");
    });

    heroDots.forEach(dot => {
        dot.classList.remove("active");
    });

    heroSlides[currentHeroSlide].classList.add("active");
    heroDots[currentHeroSlide].classList.add("active");
}


heroNext.addEventListener("click", () => {
    showHeroSlide(currentHeroSlide + 1);
});


heroPrev.addEventListener("click", () => {
    showHeroSlide(currentHeroSlide - 1);
});


heroDots.forEach((dot, index) => {

    dot.addEventListener("click", () => {
        showHeroSlide(index);
    });

});


/* Automatic slider */

let heroAutoSlide = setInterval(() => {
    showHeroSlide(currentHeroSlide + 1);
}, 6000);


/* =========================================================
   ROOM SLIDER
========================================================= */

const rooms = [

    {
        title: "Standard Room",

        description:
            "Comfortable and stylish rooms designed for a peaceful and relaxing stay.",

        image:
            "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85",

        price: "$120"
    },

    {
        title: "Deluxe Room",

        description:
            "Spacious rooms featuring elegant interiors, premium bedding and beautiful city views.",

        image:
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",

        price: "$175"
    },

    {
        title: "Galaxy Suite",

        description:
            "Our signature suite offering generous living space, luxury furnishings and exceptional comfort.",

        image:
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=85",

        price: "$250"
    }

];


let currentRoom = 0;


const roomTitle = document.getElementById("roomTitle");
const roomDescription = document.getElementById("roomDescription");
const roomImage = document.getElementById("roomImage");
const roomDots = document.querySelectorAll("#roomDots span");


function showRoom(index) {

    if (index >= rooms.length) {
        currentRoom = 0;
    } else if (index < 0) {
        currentRoom = rooms.length - 1;
    } else {
        currentRoom = index;
    }

    const room = rooms[currentRoom];

    roomTitle.textContent = room.title;
    roomDescription.textContent = room.description;
    roomImage.src = room.image;
    roomImage.alt = room.title;

    roomDots.forEach(dot => {
        dot.classList.remove("active");
    });

    roomDots[currentRoom].classList.add("active");
}


document.getElementById("roomNext").addEventListener("click", () => {
    showRoom(currentRoom + 1);
});


document.getElementById("roomPrev").addEventListener("click", () => {
    showRoom(currentRoom - 1);
});


roomDots.forEach((dot, index) => {

    dot.addEventListener("click", () => {
        showRoom(index);
    });

});


/* =========================================================
   BOOKING FORM
========================================================= */

const bookingForm = document.getElementById("bookingForm");

const checkIn = document.getElementById("checkIn");
const checkOut = document.getElementById("checkOut");


/* Prevent selecting dates in the past */

const today = new Date().toISOString().split("T")[0];

checkIn.min = today;
checkOut.min = today;


checkIn.addEventListener("change", () => {

    checkOut.min = checkIn.value;

});


bookingForm.addEventListener("submit", event => {

    event.preventDefault();

    const checkInDate = new Date(checkIn.value);
    const checkOutDate = new Date(checkOut.value);

    if (checkOutDate <= checkInDate) {

        showToast(
            "Check-out date must be after your check-in date."
        );

        return;
    }


    showToast(
        "Great! Your availability request has been received."
    );

});


/* =========================================================
   NEWSLETTER
========================================================= */

const newsletterForm =
    document.getElementById("newsletterForm");


newsletterForm.addEventListener("submit", event => {

    event.preventDefault();

    const emailInput =
        newsletterForm.querySelector("input");

    if (!emailInput.value) {
        return;
    }

    showToast(
        "You're subscribed to the Tessy Galaxy newsletter!"
    );

    emailInput.value = "";

});


/* =========================================================
   TOAST NOTIFICATION
========================================================= */

const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

let toastTimeout;


function showToast(message) {

    toastMessage.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimeout);

    toastTimeout = setTimeout(() => {

        toast.classList.remove("show");

    }, 4000);

}


/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop = document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            const activeLink =
                document.querySelector(
                    `.nav-link[href="#${sectionId}"]`
                );

            if (activeLink) {
                activeLink.classList.add("active");
            }

        }

    });

});


/* =========================================================
   CURRENT YEAR
========================================================= */

document.getElementById("currentYear").textContent =
    new Date().getFullYear();


/* =========================================================
   KEYBOARD ACCESSIBILITY FOR SLIDERS
========================================================= */

document.addEventListener("keydown", event => {

    if (event.key === "ArrowRight") {
        showHeroSlide(currentHeroSlide + 1);
    }

    if (event.key === "ArrowLeft") {
        showHeroSlide(currentHeroSlide - 1);
    }

});


/* =========================================================
   TOUCH SWIPE FOR HERO
========================================================= */

let touchStartX = 0;
let touchEndX = 0;


document.querySelector(".hero").addEventListener(
    "touchstart",
    event => {
        touchStartX = event.changedTouches[0].screenX;
    },
    { passive: true }
);


document.querySelector(".hero").addEventListener(
    "touchend",
    event => {

        touchEndX = event.changedTouches[0].screenX;

        const difference =
            touchStartX - touchEndX;

        if (Math.abs(difference) < 50) {
            return;
        }

        if (difference > 0) {
            showHeroSlide(currentHeroSlide + 1);
        } else {
            showHeroSlide(currentHeroSlide - 1);
        }

    },
    { passive: true }
);