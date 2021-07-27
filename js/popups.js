const popupLinks = document.querySelectorAll('.popup-link');

if (popupLinks.length > 0) {
    for (let i = 0; i < popupLinks.length; i++) {
        const popupLink = popupLinks[i];
        popupLink.addEventListener('click', function (event) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            event.preventDefault();
        });
    }
}

const popupOpen = (currentPopup) => {
    if (currentPopup) {
        const popupActive = document.querySelector('.close-popup');
        if (popupActive) {
            popupClose(popupActive);
        }
        currentPopup.classList.add('open');
        currentPopup.addEventListener('click', function (event) {
            if (!event.target.closest('.popup_content')) {
                popupClose(event.target.closest('.popup'));
            }
        });
    }
}
const popupClose = (popupActive) => {
        popupActive.classList.remove('open');
    }
