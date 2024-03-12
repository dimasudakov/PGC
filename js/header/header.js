const appHeader = document.getElementById('app-header');

let navBarOpened = false

let prevWindowWidth = -1

function updateHeader() {
    const bigHeader = `
    <img src="assets/header/desktop-logo.svg" alt="" class="header-logo-big" id="header-logo">
    <div class="header-item f-mx1" id="header_about"></div>
    <div class="header-item f-mx1" id="header_experts"></div>
    <div class="header-item f-mx1" id="header_orientations"></div>
    <div class="header-item f-mx1" id="header_terms"></div>
    <div class="header-item f-mx1" id="header_program"></div>
    <a class="header-item f-mx1" href="https://docs.google.com/forms/d/e/1FAIpQLSfpNiuhsIXb71GjPloVdhShmMiI2IaME_OvUwD9rbFGMIjkRQ/viewform?usp=sf_link" id="header_sign_up"></a>
    <div class="header-item f-mx1" id="header_contacts"></div>
    <a class="header-item f-mx1" id="langButton">Ru / Eng</a>
    <a class="header-item" style="margin-left: 3vw; height: 70%;" href="https://t.me/pgc_conf">
        <img src="assets/header/tg-logo.png" alt="" style="height: 100%;">
    </a>
  `;

    const mobileHeader = `
    <div class="header-wrapper">
        <img src="assets/header/navbar-icon.svg" alt="" class="nav-button" id="navButton" />
        <img src="assets/header/mobile-logo.svg" alt="" class="header-logo-small" id="header-logo" />
    </div>
  `;

    closeNavigationBar()
    if (window.innerWidth < 1270 && (prevWindowWidth >= 1270 || prevWindowWidth === -1)) {
        if(prevWindowWidth !== -1) {
            location.reload()
        }
        appHeader.innerHTML = mobileHeader;
        const navButton = appHeader.querySelector('.nav-button');
        if (navButton) {
            navButton.addEventListener('click', handleNavBarClick);
        }
    }
    if (window.innerWidth >= 1270 && (prevWindowWidth < 1270 || prevWindowWidth === -1)) {
        if(prevWindowWidth !== -1) {
            location.reload()
        }
        appHeader.innerHTML = bigHeader;
        removeEventListener('click', handleNavBarClick)
    }
    
    prevWindowWidth = window.innerWidth
    window.addEventListener('resize', updateHeader);

    function handleNavBarClick() {
        if (!navBarOpened) {
            showNavigationBar()
        } else {
            closeNavigationBar()
        }
    }

    function showNavigationBar() {
        navBarOpened = true;
        const navBar = document.getElementById('mobile-nav-bar')
        if (navBar) {
            navBar.style.left = '0';
        }
        const navButton = document.getElementById('navButton')
        if (navButton) {
            navButton.src = "assets/header/close-navbar-icon.svg"
            navButton.style.width = '20px';
            navButton.style.height = '20px';
        }

        const navbarActions = document.querySelectorAll('.navbar-action');
        navbarActions.forEach(navbarAction => {
            navbarAction.addEventListener('click', closeNavigationBar);
        });
    }

    function closeNavigationBar() {
        navBarOpened = false
        const navBar = document.getElementById('mobile-nav-bar')
        if (navBar) {
            navBar.style.left = '-100%';
        }
        const navButton = document.getElementById('navButton')
        if (navButton) {
            navButton.src = "assets/header/navbar-icon.svg"
            navButton.style.width = '30px';
            navButton.style.height = '30px';
        }
        const navbarActions = document.querySelectorAll('.navbar-action');
        navbarActions.forEach(navbarAction => {
            removeEventListener('click', closeNavigationBar)
        });
    }
}

updateHeader();
