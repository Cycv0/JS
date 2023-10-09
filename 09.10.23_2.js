function toggleContent(sectionId) {
    var section = document.getElementById(sectionId);
    var arrow = section.previousElementSibling.querySelector('span');

    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        arrow.classList.add('arrow-up');
    } else {
        section.style.display = 'none';
        arrow.classList.remove('arrow-up');
    }
}
