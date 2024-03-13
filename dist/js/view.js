
let V = {}


V.createCustomStructure = function (code, id, descriptionText, type) {
    const infosDiv = document.createElement('div');
    infosDiv.classList.add('result__infos');

    const codeH3 = document.createElement('h3');
    codeH3.classList.add('result__infos__code');
    codeH3.textContent = code; // Utilisez la variable 'code'
    infosDiv.appendChild(codeH3);

    const idH3 = document.createElement('h3');
    idH3.classList.add('result__infos__id');
    idH3.textContent = id; // Utilisez la variable 'id'
    infosDiv.appendChild(idH3);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('result__description');

    const textH3 = document.createElement('h3');
    textH3.classList.add('result__description__text');
    textH3.textContent = descriptionText; // Utilisez la variable 'descriptionText'
    descriptionDiv.appendChild(textH3);

    const typeText = document.createElement('h3');
    typeText.classList.add('result__infos__type');
    typeText.textContent = type; // Utilisez la variable 'descriptionText'



    let listItem = document.createElement('li');
    listItem.classList.add('result');
    listItem.appendChild(infosDiv);
    listItem.appendChild(descriptionDiv);
    listItem.appendChild(typeText);


    return listItem;
}


V.updateResults = function (inputValue, data) {
    let resultsList = document.querySelector('.searchResult');
    resultsList.innerHTML = '';

    for (let key in data) {
        data[key].forEach((element) => {
            element.keywords.forEach((keyword) => {
                if (keyword.toString().toLowerCase().includes(inputValue.toLowerCase())) {
                    let listItem = V.createCustomStructure(element.keywords[0], element.keywords[1], element.description, element.type);
                    resultsList.appendChild(listItem);
                }
            });
        });

    }

    if (resultsList.innerHTML == '') {
        let listItem = document.createElement('li');
        listItem.classList.add('result', 'result--noResult');
        listItem.textContent = 'Aucun résultat';
        resultsList.appendChild(listItem);
    }


    if (inputValue == '') {
        resultsList.innerHTML = '';
    }


}

export { V }