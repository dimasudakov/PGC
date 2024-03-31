const animationTime = 50000

function animatePhotoWrapper() {
    var photoWrapper = document.getElementById('photo-wrapper');
    var windowWidth = window.innerWidth;
    var photoWrapperWidth = photoWrapper.offsetWidth;

    var endLeft = Math.min(0, -(photoWrapperWidth - windowWidth));

    var startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;

        var newLeft = (progress / animationTime) * endLeft;

        photoWrapper.style.left = newLeft + 'px';

        if (progress < animationTime) {
            window.requestAnimationFrame(step);
        } else {
            photoWrapper.style.left = '0';
            startTime = null; 
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}

animatePhotoWrapper();

