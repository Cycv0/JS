function generujPola() {
    var piosenki = document.querySelector('input[type="hidden"]');
    var divPola = document.getElementById('pola');
    
    var element1 = document.createElement('input');
    element1.setAttribute('value', piosenki.dataset.song1);
    divPola.appendChild(element1);

    var element2 = document.createElement('input');
    element2.setAttribute('value', piosenki.dataset.song2);
    divPola.appendChild(element2);

    var element3 = document.createElement('input');
    element3.setAttribute('value', piosenki.dataset.song3);
    divPola.appendChild(element3);
}
