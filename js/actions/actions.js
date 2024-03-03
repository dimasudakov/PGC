
document.getElementById('slide-1_action-1').addEventListener('click', function() {
    const group2 = document.getElementById('group2');

    group2.scrollIntoView({behavior: 'smooth'});
});

document.getElementById('slide-1_action-2').addEventListener('click', function() {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfatxuGtKkXNncB26GQBg0F7biL_2lqGsasfD20kfUe2iQk9w/viewform?usp=sf_link';
});

// TODO add document
document.getElementById('slide-1_action-3').addEventListener('click', function() {
    var path = '/docs/conference_program.pdf';

    var link = document.createElement('a');
    link.href = path;
    link.download = 'conference_program.pdf';
    link.target = '_blank';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
});

document.getElementById('slide-1_action-4').addEventListener('click', function() {
    window.location.href = 'https://t.me/htr_conf';
});


document.getElementById('slide-1_action-5').addEventListener('click', function() {
    const path = '/docs/thesis_example.docx';

    const link = document.createElement('a');
    link.href = path;
    link.download = 'thesis_example.docx';
    link.target = '_blank';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
});



// document.getElementById('download-doc').addEventListener('click', function() {
//     var path = '/docs/reglament.pdf';
//
//     var link = document.createElement('a');
//     link.href = path;
//     link.download = 'reglament.pdf';
//     link.target = '_blank';
//
//     document.body.appendChild(link);
//     link.click();
//
//     document.body.removeChild(link);
// });


