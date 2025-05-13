
function showSection(sectionId, element) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
    
    var tabs = document.querySelectorAll('nav a')
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    if (element) {
        element.classList.add('active');
    }

}

window.onload = function() {
    showSection('home', document.querySelector('nav a'));
};