
import { M } from './js/model.js';
import { V } from './js/view.js';

M.init();

document.querySelector('.searchBar__input').addEventListener('input', function (event) {
    let userInput = event.target.value;
    V.updateResults(userInput, M.searchData);
});

document.body.addEventListener('click', (e) => {

    if (e.target.classList.contains('nav__iconBox__icon--search')) {


        if (!document.querySelector('.searchBar__input').value.length == 0) {
            document.querySelector('.searchResult').classList.remove('searchResult--hidden');
        }
        if (document.querySelector('.searchBar').classList.contains('visible')) {
            document.querySelector('.searchResult').classList.add('searchResult--hidden');
        }
        else {
            document.querySelector('.searchBar__input').focus();
        }
        document.querySelector('.searchBar').classList.toggle('visible');


    }

    // si le type de l'element cliqué est body ou main on enleve la class visible
    if (e.target.tagName == 'BODY' || e.target.tagName == 'MAIN') {
        document.querySelector('.searchBar').classList.remove('visible');
        document.querySelector('.searchResult').classList.add('searchResult--hidden');
        document.querySelector('.searchBar__input').blur();
    }


})

// si touche echap on enleve la class visible
document.body.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
        document.querySelector('.searchBar').classList.remove('visible');
        document.querySelector('.searchResult').classList.add('searchResult--hidden');
        document.querySelector('.searchBar__input').blur();

    }

    // si la touche entrée est appuyé on envoie la recherche
    if (e.key === 'Enter') {
        document.querySelector('.searchBar').classList.add('visible');
        document.querySelector('.searchBar__input').focus();
    }
})



document.querySelector('.contentScroll').addEventListener('scroll', () => {
    document.querySelector('.searchBar').classList.remove('visible');
    document.querySelector('.searchResult').classList.add('searchResult--hidden');
    document.querySelector('.searchBar__input').blur();



    //si le scroll est - de 100px on enleve la class visible
    if (document.querySelector('.contentScroll').scrollTop < 100) {
        document.querySelector('.nav__iconBox__icon--scrollTop').classList.add('nav__iconBox__icon--disabled');
    }
    else {
        document.querySelector('.nav__iconBox__icon--scrollTop').classList.remove('nav__iconBox__icon--disabled');
    }
})

// on key up

document.querySelector('.searchBar__input').addEventListener('keyup', (e) => {
    document.querySelector('.searchResult').classList.remove('searchResult--hidden');

    if (e.target.value.length == 0) {
        document.querySelector('.searchResult').classList.add('searchResult--hidden');

    }

})
