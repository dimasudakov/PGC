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
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A43e298d0140e1a5a77fd77b1b77e1a8724b14e5976151ecaf29879345461ca44&amp;source=constructor" class="map-abs-center"></iframe>
            </div>
        </div>
        <div class="info">
            <div class="contacts">
                <div class="title f-2" id="footer_contacts-title"></div>
                <ul>
                    <li id="f-user">
                        <div class="logo-wrapper">
                            <img src="assets/footer/logo-user.png" alt="" class="logo abs-center" />
                        </div>
                        <div id="footer-person" class="f-mx1" style="z-index: 10;"></div>
                    </li>
                    <li id="f-call">
                        <div class="logo-wrapper">
                            <img src="assets/footer/logo-call.png" alt="" class="logo abs-center" />
                        </div>
                        <div id="footer-phone" class="f-mx1"  style="z-index: 10;"></div>
                    </li>
                    <li>
                        <div class="logo-wrapper">
                            <img src="assets/footer/logo-email.png" alt="" class="logo abs-center" />
                        </div>
                        <div class="f-mx1" style="z-index: 10;">pgc.conf@gmail.com</div>
                    </li>
                    <li>
                        <div class="logo-wrapper">
                            <img src="assets/footer/logo-tg.png" alt="" class="logo abs-center" />
                        </div>
                        <a href="https://t.me/pgc_conf" style="z-index: 10;">
                            <div class="f-mx1">@pgc_conf</div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="location">
                <div class="title f-2" id="footer_location-title">Место проведения</div>
                <h4 id="footer_location" class="f-mx0_9">
                <span class="title-blob" id="footer_location-bold"></span>,
                <span id="footer_location-normal"></span>
            </h4>
            </div>
        </div>
`

const footerContentMobile = `
        <img class="back-mobile-1" src="assets/footer/c-1.svg" alt="">
        <img class="back-mobile-3" src="assets/footer/c-3.svg" alt="">
        <img class="back-mobile-2" src="assets/footer/c-8.svg" alt="">
        <img class="back-mobile-4" src="assets/footer/c-5.svg" alt="">
        <div class="info">
            <div class="contacts">
                <div class="title f-2" id="footer_contacts-title"></div>
                <ul>
                    <li id="f-user">
                        <div class="logo-wrapper">
                            <img src="assets/footer/logo-user.png" alt="" class="logo abs-center" />
                        </div>
                        <div id="footer-person" class="contacts-person f-mx0_9"></div>
                    </li>
                    <li>
                        <div class="logo-wrapper">
                            <img src="assets/footer/logo-email.png" alt="" class="logo abs-center" />
                        </div>
                        <div class="f-mx0_9">pdc.conf@gmail.com</div>
                    </li>
                    <li id="f-call">
                        <div class="logo-wrapper">
                            <img src="assets/footer/logo-call.png" alt="" class="logo abs-center" />
                        </div>
                        <div id="footer-phone" class="f-mx0_9"></div>
                    </li>
                    <li>
                        <div class="logo-wrapper">
                            <img src="assets/footer/logo-tg.png" alt="" class="logo abs-center" />
                        </div>
                        <a href="https://t.me/pgc_conf" >
                            <div class="f-mx0_9">@pgc_conf</div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="location">
                <div class="title f-2" id="footer_location-title">Место проведения</div>
                <h4 id="footer_location" class="f-mx0_9">
                    <span class="title-blob" id="footer_location-bold"></span>,
                    <span id="footer_location-normal"></span>
                </h4>
            </div>
        </div>
        <div id="footer-mobile" class="footer-mobile">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A43e298d0140e1a5a77fd77b1b77e1a8724b14e5976151ecaf29879345461ca44&amp;source=constructor" width="100%" height="300"></iframe>
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
