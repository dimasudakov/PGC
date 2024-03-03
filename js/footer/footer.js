const footer = document.getElementById('footer')

const footerContent = `
        <img class="back-1" src="assets/footer/c-1.svg" alt="">
        <img class="back-2" src="assets/footer/c-2.svg" alt="">
        <img class="back-3" src="assets/footer/c-3.svg" alt="">
        <img class="back-4" src="assets/footer/c-4.svg" alt="">
        <img class="back-5" src="assets/footer/c-5.svg" alt="">
        <img class="back-6" src="assets/footer/c-6.svg" alt="">
        <img class="back-7" src="assets/footer/c-7.svg" alt="">
        <img class="back-8" src="assets/footer/c-3.svg" alt="">
        <img class="back-9" src="assets/footer/c-3.svg" alt="">
        <div class="map-wrapper">
            <img src="assets/footer/map-wrapper.png" alt="" class="stroke">
            <div class="map-container">
                <iframe class="yandex-map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A2985f6f0724324f8077d7bd49ac30c6f5c2e96a902c3b537c88db2f689d77e95&amp;source=constructor"></iframe>
            </div>
        </div>
        <div class="info">
            <div class="contacts">
                <div class="title f-2" id="footer_contacts-title"></div>
                <ul>
                    <li>
                        <div class="logo-wrapper">
                            <img src="assets/footer/logo-user.png" alt="" class="logo abs-center" />
                        </div>
                        <div id="footer-person" class="f-mx1"></div>
                    </li>
                    <li>
                        <div class="logo-wrapper">
                            <img src="assets/footer/logo-call.png" alt="" class="logo abs-center" />
                        </div>
                        <div id="footer-phone" class="f-mx1"></div>
                    </li>
                    <li>
                        <div class="logo-wrapper">
                            <img src="assets/footer/logo-email.png" alt="" class="logo abs-center" />
                        </div>
                        <div class="f-mx1">htr.conf@gmail.com</div>
                    </li>
                    <li>
                        <div class="logo-wrapper">
                            <img src="assets/footer/logo-tg.png" alt="" class="logo abs-center" />
                        </div>
                        <a href="https://t.me/htr_conf">
                            <div class="f-mx1">@htr_conf</div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="location">
                <div class="title f-2" id="footer_location-title">Место проведения</div>
                <h4 id="footer_location" class="f-mx1">Альметьевский государственный нефтяной институт,
                    Республика Татарстан, г. Альметьевск, ул. Советская, 212к2</h4>
            </div>
        </div>
`

const footerContentMobile = `
        <img class="back-mobile-1" src="assets/footer/mobile-c-1.svg" alt="">
        <img class="back-mobile-2" src="assets/footer/mobile-c-2.svg" alt="">
        <img class="back-mobile-3" src="assets/footer/mobile-c-3.svg" alt="">
        <img class="back-mobile-4" src="assets/footer/mobile-c-4.svg" alt="">
        <img class="back-mobile-5" src="assets/footer/mobile-c-5.svg" alt="">
        <img class="back-mobile-6" src="assets/footer/mobile-c-6.svg" alt="">
        <img class="back-mobile-7" src="assets/footer/mobile-c-7.svg" alt="">
        <div class="contacts">
            <div class="title f-0_8" id="footer_contacts-title"></div>
            <ul>
                <li>
                    <div class="logo-wrapper">
                        <img src="assets/footer/logo-user.png" alt="" class="logo abs-center" />
                    </div>
                    <div id="footer-person" class="f-mx0_6 a"></div>
                </li>
                <li>
                    <div class="logo-wrapper">
                        <img src="assets/footer/logo-call.png" alt="" class="logo abs-center" />
                    </div>
                    <div id="footer-phone" class="f-mx1 a"></div>
                </li>
                <li>
                    <div class="logo-wrapper">
                        <img src="assets/footer/logo-email.png" alt="" class="logo abs-center" />
                    </div>
                    <div class="f-mx1">htr.conf@gmail.com</div>
                </li>
                <li>
                    <div class="logo-wrapper">
                        <img src="assets/footer/logo-tg.png" alt="" class="logo abs-center" />
                    </div>
                    <a href="https://t.me/htr_conf">
                        <div class="f-mx1">@htr_conf</div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="bottom">
            <div class="location">
                <div class="title f-0_8" id="footer_location-title"></div>
                <div class="f-mx0_6" id="footer_location"></div>
            </div>
            <div class="map-wrapper">
                <img src="assets/footer/map-wrapper.png" alt="" class="stroke">
                <div class="map-container">
                    <iframe class="yandex-map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A2985f6f0724324f8077d7bd49ac30c6f5c2e96a902c3b537c88db2f689d77e95&amp;source=constructor"></iframe>
                </div>
            </div>
        </div>
`

const footerLimit = 900;

function updateFooter() {

    let prevWindowWidth = -1

    function update() {
        if (window.innerWidth <= footerLimit && (prevWindowWidth > footerLimit || prevWindowWidth === -1)) {
            if(prevWindowWidth !== -1) {
                location.reload()
            }
            footer.innerHTML = footerContentMobile
        } 
        if (window.innerWidth > footerLimit && (prevWindowWidth <= footerLimit || prevWindowWidth === -1)) {
            if(prevWindowWidth !== -1) {
                location.reload()
            }
            footer.innerHTML = footerContent
        }
        prevWindowWidth = window.innerWidth
    }
    
    update()
    window.addEventListener('resize', update)
}

updateFooter()
