let V = {}

let data = {
    css: [
        'common',
        'contact',
        'fonts',
        'footer',
        'header',
        'index',
        'root'
    ],

    pageName: [
        'Accueil.',
        '01. Comprendre.',
        '02. Concevoir.',
        '03. Exprimer.',
        '04. Développer.',
        '05. Entreprendre.'


    ],

    header: '<div class="header-left"><p>{{PAGENAME}}</p></div><div class="header-right"><a class="header--btn" href="index.html">Accueil.</a></div>',

    footer: '<p style="font-size: .6rem;">Par Isaac Demeerseman — 2023 - 2023</p>',

    sujet: [
        'SUJET',
        '101-sujet'
    ]
}

V.renderCss = function () {
    let html = document.querySelector('head').innerHTML;
    let css = ''
    for (elt of data.css) {
        css += '<link rel="stylesheet" href="css/' + elt + '.css">'
    }

    html = html + css
    document.querySelector('head').innerHTML = html
}

V.renderHeader = function () {
    let html = document.querySelector('html').innerHTML;

    html = html.replace('{{HEADER}}', data.header)

    id = document.querySelector('#pageID').innerHTML;
    html = html.replaceAll('{{PAGENAME}}', data.pageName[id])
    document.querySelector('html').innerHTML = html

}

V.renderSujet = function () {
    let html = document.querySelector('html').innerHTML;

    id = document.querySelector('#pageID').innerHTML;
    html = html.replaceAll('{{SUJET}}', data.sujet[id])
    document.querySelector('html').innerHTML = html

}

V.renderFooter = function () {
    let html = document.querySelector('html').innerHTML;
    html = html.replace('{{FOOTER}}', data.footer)
    document.querySelector('html').innerHTML = html

}

V.renderFooter = function () {
    let html = document.querySelector('html').innerHTML;
    html = html.replaceAll('{{FOOTER}}', data.footer)
    document.querySelector('html').innerHTML = html

}


V.renderCss();
V.renderHeader()
V.renderFooter()