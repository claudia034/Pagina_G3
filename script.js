window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  loader.classList.add("opacity-0", "transition-opacity", "duration-500");

  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuButton = document.getElementById('menu-button');
    mobileMenu.classList.toggle('hidden');
    menuButton.classList.toggle('open');
}

document.getElementById('menu-button').addEventListener('click', toggleMobileMenu);

function setupRamasCarousel() {
    const carousel = document.getElementById('ramas-carousel');
    const nextButton = document.getElementById('ramas-next');
    const cards = carousel ? carousel.querySelectorAll('.ramas-card') : [];

    if (!carousel || !nextButton) {
        return;
    }

    const getScrollAmount = () => {
        const firstCard = carousel.querySelector('.ramas-card');
        if (!firstCard) {
            return carousel.clientWidth * 0.8;
        }

        const carouselStyles = window.getComputedStyle(carousel);
        const cardGap = parseFloat(carouselStyles.columnGap || carouselStyles.gap) || 24;
        return firstCard.getBoundingClientRect().width + cardGap;
    };

    let isCycling = false;
    let autoCycleId = null;

    const cycleRight = () => {
        if (isCycling) {
            return;
        }

        isCycling = true;
        const scrollAmount = getScrollAmount();
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });

        window.setTimeout(() => {
            const firstCard = carousel.querySelector('.ramas-card');
            if (firstCard) {
                carousel.appendChild(firstCard);
                carousel.classList.add('ramas-carousel-no-smooth');
                carousel.scrollLeft -= scrollAmount;
                carousel.offsetHeight;
                carousel.classList.remove('ramas-carousel-no-smooth');
            }

            isCycling = false;
        }, 450);
    };

    const stopAutoCycle = () => {
        if (autoCycleId) {
            window.clearInterval(autoCycleId);
            autoCycleId = null;
        }
    };

    const startAutoCycle = () => {
        if (autoCycleId) {
            return;
        }

        autoCycleId = window.setInterval(cycleRight, 2000);
    };

    nextButton.addEventListener('click', () => {
        stopAutoCycle();
        cycleRight();
        startAutoCycle();
    });

    cards.forEach((card) => {
        card.addEventListener('mouseenter', stopAutoCycle);
        card.addEventListener('mouseleave', startAutoCycle);
        card.addEventListener('focusin', stopAutoCycle);
        card.addEventListener('focusout', startAutoCycle);
        card.addEventListener('touchstart', stopAutoCycle, { passive: true });
        card.addEventListener('touchend', startAutoCycle);
        card.addEventListener('touchcancel', startAutoCycle);
        card.addEventListener('click', stopAutoCycle);
    });

    startAutoCycle();
}

setupRamasCarousel();

function setupActivitiesCarousel() {
    const carousel = document.getElementById('activities-carousel');
    const prevButton = document.getElementById('activities-prev');
    const nextButton = document.getElementById('activities-next');

    if (!carousel || !prevButton || !nextButton) {
        return;
    }

    const getScrollAmount = () => {
        const firstCard = carousel.querySelector('.activity-card');
        if (!firstCard) {
            return carousel.clientWidth * 0.8;
        }

        const carouselStyles = window.getComputedStyle(carousel);
        const cardGap = parseFloat(carouselStyles.columnGap || carouselStyles.gap) || 32;
        return firstCard.getBoundingClientRect().width + cardGap;
    };

    const scrollCarousel = (direction) => {
        carousel.scrollBy({
            left: getScrollAmount() * direction,
            behavior: 'smooth'
        });
    };

    prevButton.addEventListener('click', () => {
        scrollCarousel(-1);
    });

    nextButton.addEventListener('click', () => {
        scrollCarousel(1);
    });
}

setupActivitiesCarousel();

function showMessage(message) {
    const modal = document.getElementById('message-modal');
    const modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = message;
    modal.classList.remove('hidden');
}

function hideMessage() {
    const modal = document.getElementById('message-modal');
    modal.classList.add('hidden');
}

