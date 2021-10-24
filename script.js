const main = document.querySelector('.main');

// events  LORSQUE ON CLIQUE SUR LA SOURIS
document.addEventListener('mousedown', (e) => {
    // SET MOUSEMOUVE-X
    // SI LA CLASS DE L'ELEMENT == DRAG-X DANS CE CAS LA SPAN VERTICAL

    // ON AJOUTE (window.event != null) CAR IL PEUT Y AVOIR DES BUGS AVEC LA SOURIS DONC POUR PREVENIR CELA ON AJOUTE CETTE CONDITION
    if (e.target.className == "drag-x" && (window.event != null)) {

        document.onmousemove = (e) => {
            // prevenir les evenement genant sur le dom
            e == null ? e = window.event : '';
            // LORSQUE ON SLIDE ON CHANGE LE FLEX
            document.querySelector('.box-1').style.flex = "0 0" + e.clientX / (main.clientWidth / 100) + "%";
            console.log(e.clientX / (main.clientWidth / 100));
        }
        // on appelle cette func elle evite les bug et les selection du tete lorsque l'on drague la span vertc ou horiz
        preventBadBehavior(e);
    }

    // SET mousemouve-Y
    // SI LA CLASS DE L'ELEMENT == drag-Y DANS CE CAS LA SPAN horizontal doit bouger
    else if (e.target.className == "drag-y" && (window.event != null)) {

        document.onmousemove = (e) => {
            e == null ? e = window.event : '';
            document.querySelector('.top').style.flex = "0 0" + e.clientY / (main.clientHeight / 100) + "%";
        }
        preventBadBehavior(e);
    }

})

// ON DOIT STOPPER LE DARG-X LORSQU'ON MOUSEUP
document.addEventListener('mouseup', (e) => {
    // SI QLQ CHOSE CE PASSE
    if (e.target != null) {
        // ON ARRETE TOUT
        document.onmousemove = null;
        document.onselectstart = null;
        document.ondragstart = null;
    }
})

// PREVENIR CONTRE LES MAUVAIS EVENTS LORSQUE L'ON DRAG LES SPAN VERTIC ET HORIZON

const preventBadBehavior = (e) => {
    document.onselectstart = () => { return false };
    document.ondragstart = () => { return false };
    return false;
}