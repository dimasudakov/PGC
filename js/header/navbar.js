const navbar = document.getElementById('mobile-nav-bar')

const content = `
<div class="content">
        <ul>
            <li class="navbar-action">
                <div id="navbar_main"></div>
                <img src="assets/header/home.svg" alt="" class="li-logo" />
            </li>
            <li class="ml-30 navbar-action">
                <div id="navbar_about"></div>
                <img src="assets/header/arrow-right.svg" alt="" class="li-logo" />
            </li>
            <li class="ml-30 navbar-action">
                <div id="navbar_terms"></div>
                <img src="assets/header/arrow-right.svg" alt="" class="li-logo" />
            </li>
            <li class="ml-30 navbar-action">
                <div id="navbar_program"></div>
                <img src="assets/header/arrow-right.svg" alt="" class="li-logo" />
            </li>
            <li class="ml-30 navbar-action">
                <div id="navbar_tezis"></div>
                <img src="assets/header/arrow-right.svg" alt="" class="li-logo" />
            </li>
            <li class="ml-30 navbar-action">
                <div id="navbar_sign_up"></div>
                <img src="assets/header/arrow-right.svg" alt="" class="li-logo" />
            </li>
            <li class="ml-30 navbar-action">
                <img src="assets/header/tg-logo.png" alt="tg" class="tg-logo">
                <div id="navbar_tg-link"></div>
                <img src="assets/header/arrow-right.svg" alt="ar" class="li-logo" />
            </li>
            <li class="pl-30 navbar-action" >
                <div id="navbar_contacts"></div>
                <img src="assets/header/arrow-right.svg" alt="ar" class="li-logo" />
            </li>
        </ul>
        <div class="lang ml-30 navbar-action" id="langButton">
            Ru / Eng
        </div>
    </div>
`

navbar.innerHTML = content

