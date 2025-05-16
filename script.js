
// ----------------------------Tab Functionality-------------------------------

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

/* --------------------------------------------------------------------- */
// ----------------------------Tab Interactivity-------------------------------

document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            tab.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest"
            })
        })
    })
    const defaultTab = document.getElementById("defaultOpen");
    if (defaultTab) {
        defaultTab.click();
    }

})