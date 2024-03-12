const mainPhoto = document.getElementById('slide-1_blob');
const limit = 900;

function updatePhoto() {
    function update() {
        let lang = localStorage.getItem('language');
        if (window.innerWidth <= limit) {
            if (lang === 'En') {
                mainPhoto.src = "assets/header/blob-mobile-en.png";
            } else {
                mainPhoto.src = "assets/header/blob-mobile-ru.png";
            }
        } else {
            if (lang === 'En') {
                mainPhoto.src = "assets/header/blob-en.png";
            } else {
                mainPhoto.src = "assets/header/blob-ru.png";
            }
        }
    }

    update();
    window.addEventListener('resize', update);
}

document.addEventListener("DOMContentLoaded", function() {
    updatePhoto();
});
