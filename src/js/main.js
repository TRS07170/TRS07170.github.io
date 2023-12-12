// Smooth Scrolling
function scrollToSection(event) {
    event.preventDefault();
    if (this.id == "a-home") {
        window.scrollTo({top: 0,left: 0,behavior: "smooth",});
    } else {
        var ele;
        if (this.id == "a-publications") {
            ele = document.getElementById("publications");
        } else if (this.id == "a-research") {
            ele = document.getElementById("research");
        }
        window.scrollTo({top: ele.offsetTop-90,
                         left: 0,
                         behavior: "smooth",
                        });
    }
}
const nav_as = document.querySelector("nav").querySelectorAll('a');
for (let i = 0; i < nav_as.length; i++) {
    nav_as[i].addEventListener("click",scrollToSection);
}

// Modal box
document.querySelectorAll('.pub-block').forEach(function(pubBlock) {
    var abstractLink = pubBlock.querySelector('.abstract a');
    var modalAbstract = pubBlock.querySelector('.modal-abstract');
    var bibtexLink = pubBlock.querySelector('.bibtex a');
    var modalBibtex = pubBlock.querySelector('.modal-bibtex');

    abstractLink.addEventListener('click', function(event) {
        event.preventDefault();
        modalAbstract.style.display = modalAbstract.style.display === 'none' ? 'block' : 'none';
        modalBibtex.style.display = modalBibtex.style.display === 'block' ? 'none' : 'none';
    });
    bibtexLink.addEventListener('click', function(event) {
        event.preventDefault();
        modalBibtex.style.display = modalBibtex.style.display === 'none' ? 'block' : 'none';
        modalAbstract.style.display = modalAbstract.style.display === 'block' ? 'none' : 'none';
    });
});