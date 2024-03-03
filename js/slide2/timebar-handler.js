window.addEventListener('load', function() {
    const timebarMedium = document.getElementById('timebar-medium');
    const timebarSmall = document.getElementById('timebar-small');
    const timebarBig = document.getElementById('timebar-big');

    function updateScript() {
        if (window.innerWidth <= 530) {
            timebarSmall.style.display = ''
            timebarMedium.style.display = 'none'
            timebarBig.style.display = 'none'
        } else if(window.innerWidth <= 2400) {
            timebarMedium.style.display = ''
            timebarSmall.style.display = 'none'
            timebarBig.style.display = 'none'
        } else{
            timebarBig.style.display = ''
            timebarMedium.style.display = 'none'
            timebarSmall.style.display = 'none' 
        }
    }

    updateScript();
    window.addEventListener('resize', updateScript);
});