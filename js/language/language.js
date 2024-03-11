let langButton = document.getElementById('langButton')

let currentLang = localStorage.getItem("language") || "Ru";
let translations

langButton.addEventListener('click', handleChangeLanguage)

function handleChangeLanguage() {
    if(currentLang === "Ru") {
        currentLang = "En"
        localStorage.setItem("language", "En"); 
        changePageLang()
    } else {
        currentLang = "Ru"
        localStorage.setItem("language", "Ru");
        changePageLang()
    }
}

function changePageLang() {
    if (!translations) {
        loadTranslations()
    }
    for (const key in translations[currentLang]) {
        const el = document.getElementById(key)
        if (!el) continue
        if (el.tagName !== 'IMG') {
            el.innerText = translations[currentLang][key];
        } else {
            el.src = translations[currentLang][key];
        }
    }

    if(document.getElementById('slide-2_image')) {
        document.getElementById('slide-2_image').src = "assets/slide2/" + currentLang.toLowerCase() + "-image.png"
    }
}

function loadTranslations() {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', 'translations.json', false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            translations = JSON.parse(xhr.responseText);
        }
    };
    xhr.send(null);
}

changePageLang()
    

// для мобильной версии и компьютерной используются разные кнопки с одинаковым id
addEventListener('resize', () => {
    removeEventListener('click', handleChangeLanguage)
    langButton = document.getElementById('langButton')
    langButton.addEventListener('click', handleChangeLanguage)
})
