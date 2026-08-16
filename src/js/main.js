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
document.querySelectorAll('.pub-block').forEach(function(pubBlock, index) {
    var abstractLink = pubBlock.querySelector('.abstract a');
    var modalAbstract = pubBlock.querySelector('.modal-abstract');
    var bibtexLink = pubBlock.querySelector('.bibtex a');
    var modalBibtex = pubBlock.querySelector('.modal-bibtex');

    modalAbstract.style.removeProperty('display');
    modalAbstract.id = 'abstract-panel-' + index;
    abstractLink.setAttribute('aria-controls', modalAbstract.id);

    if (modalBibtex) {
        modalBibtex.style.removeProperty('display');
    }
    if (bibtexLink && modalBibtex) {
        modalBibtex.id = 'bibtex-panel-' + index;
        bibtexLink.setAttribute('aria-controls', modalBibtex.id);
    }

    function setModalState(modal, link, isOpen) {
        if (!modal) {
            return;
        }
        modal.classList.toggle('is-open', isOpen);
        modal.setAttribute('aria-hidden', String(!isOpen));
        if (link) {
            link.setAttribute('aria-expanded', String(isOpen));
        }
    }

    setModalState(modalAbstract, abstractLink, false);
    setModalState(modalBibtex, bibtexLink, false);

    abstractLink.addEventListener('click', function(event) {
        event.preventDefault();
        var shouldOpen = !modalAbstract.classList.contains('is-open');
        setModalState(modalBibtex, bibtexLink, false);
        setModalState(modalAbstract, abstractLink, shouldOpen);
    });
    if (bibtexLink && modalBibtex) {
        bibtexLink.addEventListener('click', function(event) {
            event.preventDefault();
            var shouldOpen = !modalBibtex.classList.contains('is-open');
            setModalState(modalAbstract, abstractLink, false);
            setModalState(modalBibtex, bibtexLink, shouldOpen);
        });
    }
});
