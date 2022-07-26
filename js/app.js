console.log('JS ok');
const slides = [
    "./img/01.jpg",
    "./img/02.jpg",
    "./img/03.jpg",
    "./img/04.jpg",
    "./img/05.jpg"
];

const slideElements = [];
let elementTrack = 0;

const wrapperElement = document.querySelector('.slides-wrapper');

// generare il contenuto dello slider
for (let i = 0; i < slides.length; i++) {
    const src = slides[i];

    // creo elemento li
    const li = document.createElement('li');
    // aggiungo classe slide a li
    li.className = 'slide';

    // assegno la classe active al primo elemento
    if (i === elementTrack) {
        li.classList.add('active');
    }

    // creo elemento img
    const img = document.createElement('img');
    // assegno alla proprietà src di img il valore src
    img.src = src;
    // console.log(img);
    // inserisco img in li
    li.append(img);
    console.log(li);

    // inserisco li nello slides-wrapper
    wrapperElement.append(li);

    // mi salvo tutte le slide in un array
    slideElements.push(li);
}

// implementare freccia right
const nextElement = document.querySelector('.arrow-next');

nextElement.addEventListener('click', function () {
    // togliere active dalla slide attiva
    slideElements[elementTrack].classList.remove('active');

    // aggiungere la classe active alla slide successiva (se esiste)
    if (elementTrack === slideElements.length - 1) {
        elementTrack = 0;
        slideElements[elementTrack].classList.add('active');
    } else {
        slideElements[++elementTrack].classList.add('active');
    }
})
// iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
// implementare freccia left
const prevElement = document.querySelector('.arrow-prev');

prevElement.addEventListener('click', function () {
   
})