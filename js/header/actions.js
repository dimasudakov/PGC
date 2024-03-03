
const headerAbout = document.getElementById('header_about')
if (headerAbout) headerAbout.addEventListener('click', function() {
    document.getElementById('group2').scrollIntoView({behavior: 'smooth'})
})

const headerExperts= document.getElementById('header_experts')
if (headerExperts) headerExperts.addEventListener('click', function() {

})

const headerOrientation= document.getElementById('header_orientations')
if (headerOrientation) headerOrientation.addEventListener('click', function() {
    document.getElementById('group3').scrollIntoView({behavior: 'smooth'})
})

const headerTerms= document.getElementById('header_terms')
if (headerTerms) headerTerms.addEventListener('click', function() {
    document.getElementById('group4').scrollIntoView({behavior: 'smooth'})
})

const headerProgram= document.getElementById('header_program')
if (headerProgram) headerProgram.addEventListener('click', function() {
    const path = '/docs/conference_program.pdf';

    const link = document.createElement('a');
    link.href = path;
    link.download = 'conference_program.pdf';
    link.target = '_blank';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
})

const headerSignUp = document.getElementById('header_sign_up')
if (headerSignUp) headerSignUp.addEventListener('click', function() {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfatxuGtKkXNncB26GQBg0F7biL_2lqGsasfD20kfUe2iQk9w/viewform?usp=sf_link';
})

const headerContacts = document.getElementById('header_contacts')
if (headerContacts) headerContacts.addEventListener('click', function() {
    document.getElementById('footer').scrollIntoView({behavior: 'smooth'})
})
    




const navbarMain = document.getElementById('navbar_main')
if(navbarMain) navbarMain.addEventListener('click', function() {
    // do nothing
})

const navbarAbout = document.getElementById('navbar_about')
if(navbarAbout) navbarAbout.addEventListener('click', function() {
    document.getElementById('group2').scrollIntoView({behavior: 'smooth'})
})

const navbarTerms = document.getElementById('navbar_terms')
if(navbarTerms) navbarTerms.addEventListener('click', function() {
    document.getElementById('group4').scrollIntoView({behavior: 'smooth'})
})

const navbarProgram = document.getElementById('navbar_program')
if(navbarProgram) navbarProgram.addEventListener('click', function() {
    const path = '/docs/conference_program.pdf';

    const link = document.createElement('a');
    link.href = path;
    link.download = 'conference_program.pdf';
    link.target = '_blank';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
})

const navbarTezis = document.getElementById('navbar_tezis')
if(navbarTezis) navbarTezis.addEventListener('click', function() {
    const path = '/docs/thesis_example.docx';

    const link = document.createElement('a');
    link.href = path;
    link.download = 'thesis_example.docx';
    link.target = '_blank';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
})

const navbarSignUp = document.getElementById('navbar_sign_up')
if(navbarSignUp) navbarSignUp.addEventListener('click', function() {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfatxuGtKkXNncB26GQBg0F7biL_2lqGsasfD20kfUe2iQk9w/viewform?usp=sf_link';
})

const navbarTgLink = document.getElementById('navbar_tg-link')
if(navbarTgLink) navbarTgLink.addEventListener('click', function() {
    window.location.href = 'https://t.me/htr_conf';
})

const navbarContacts = document.getElementById('navbar_contacts')
if(navbarContacts) navbarContacts.addEventListener('click', function() {
    document.getElementById('footer').scrollIntoView({behavior: 'smooth'})
})

