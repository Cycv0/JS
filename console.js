heder = document.querySelector('header');
heder.style.backgroundColor= "yellow";

head1 = document.querySelector("header h1");
document.querySelector("header h1").style.fontFamily = 'Arial Black';
document.querySelector("header h1").textContent = 'Preambuła';

sections = document.querySelectorAll('section');
for (const el  of sections) {
    el.style.border= "2px solid red";
}

head1 = document.querySelector("section  H1 ");
console.log(head1);
head1.textContent = 'Specjalność szefa';

const mainColumn = document.querySelector('.main_column');
const pElement = document.createElement('p');
pElement.textContent = 'Kebab na frytkach_-_';
mainColumn.appendChild(pElement);

const footer1 = document.querySelector('footer');
console.log(footer1);

const div_element = document.createElement('div');
div_element.style.backgroundColor = "pink";

const p_element = document.createElement('p');
p_element.innerText = " &copy";

footer1.appendChild(div_element);
div_element.appendChild(p_element);

var elements = document.querySelectorAll('h1');
console.log (elements);
elements[3].remove();
var paragrafInnerHTML = document.createElement('p');
var paragrafInnerText = document.createElement('p');

paragrafInnerHTML.innerHTML = '<i>Pochylony tekst</i>';
paragrafInnerText.innerText = '<i>Pochylony tekst</i>';
var header = document.querySelector('header');
header.appendChild(paragrafInnerHTML);
header.appendChild(paragrafInnerText);
console.log('innerHTML:', paragrafInnerHTML.innerHTML);
console.log('innerText:', paragrafInnerText.innerText);