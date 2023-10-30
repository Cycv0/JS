
var wynikElement = document.getElementById('wynikWartosc');
var przycisk = document.getElementById('przycisk');


function obliczLogarytm() {
    var wynik = Math.log2(64);
    return wynik;
}


function pokazWynik() {

    var wynik = obliczLogarytm();
    wynikElement.textContent = wynik;
    wynikElement.style.display = 'inline'; 


    przycisk.textContent = 'Ukryj wynik';
    przycisk.removeEventListener('click', pokazWynik); 
    przycisk.addEventListener('click', ukryjWynik); 
}


function ukryjWynik() {
    wynikElement.style.display = 'none'; 
    przycisk.textContent = 'Pokaż wynik'; 
    przycisk.removeEventListener('click', ukryjWynik); 
    przycisk.addEventListener('click', pokazWynik); 
}


przycisk.addEventListener('click', pokazWynik);
