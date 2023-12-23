

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


})

document.querySelector('.contentScroll').addEventListener('scroll', () => {
    document.querySelector('.searchBar').classList.remove('visible');
    document.querySelector('.searchResult').classList.add('searchResult--hidden');


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
