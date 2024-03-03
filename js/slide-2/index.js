const contentDesktop = `
        <div class="info">
            <div class="title-1 f-mx1" id="slide-2_title-1"></div>
            <div class="title-2 f-1" id="slide-2_title-2"></div>
            <div class="title-3 f-mx0_8" id="slide-2_title-3"></div>
        </div>
        <img src="assets/slide2/image.png" alt="" class="image">
        <img src="assets/slide2/ru-timeline.png" alt="" class="timeline" id="slide-2_timeline">
`

const contentMobile = `
        <div class="info">
            <div class="title-1 f-mx1" id="slide-2_title-1"></div>
            <div class="title-2 f-1" id="slide-2_title-2"></div>
            <div class="title-3 f-mx0_8" id="slide-2_title-3"></div>
        </div>
        <div class="bottom">
            <div class="control-dates f-1_5" id="slide-2_control-dates"></div>
            <div class="content">
                <img src="./assets/slide2/ru-dates-mobile.png" alt="" class="dates" id="slide-2_dates">
                <img src="./assets/slide2/image.png" alt="" class="image-mobile">
            </div>
        </div>
`

let prevWindowWidthSlide2 = -1
const limitPx = 1000;


const slide2 = document.getElementById('group2');

function updateSlide2() {
    window.addEventListener('resize', updateSlide2);

    if (window.innerWidth < limitPx && (prevWindowWidthSlide2 >= limitPx || prevWindowWidthSlide2 === -1)) {
        if(prevWindowWidthSlide2 !== -1) {
            location.reload()
        }
        slide2.innerHTML = contentMobile;
    }
    if (window.innerWidth >= limitPx && (prevWindowWidthSlide2 < limitPx || prevWindowWidthSlide2 === -1)) {
        if(prevWindowWidthSlide2 !== -1) {
            location.reload()
        }
        slide2.innerHTML = contentDesktop;
    }
    prevWindowWidthSlide2 = window.innerWidth
}
updateSlide2();