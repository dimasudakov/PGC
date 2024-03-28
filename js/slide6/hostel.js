document.getElementById('slide6_title_6').addEventListener('click', function() {
    const path = '/docs/отели2024.pdf';

    const link = document.createElement('a');
    link.href = path;
    link.download = 'отели2024.pdf';
    link.target = '_blank';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
});
