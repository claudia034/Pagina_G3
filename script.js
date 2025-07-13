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

