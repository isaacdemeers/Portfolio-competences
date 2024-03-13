import { Ac } from './class/Ac.js';
import { Competences } from './class/Competences.js';
import { Ressources } from './class/Ressources.js';
import { Sae } from './class/Sae.js';

let M = {}

// J'ai vraiment essayé de rajouter les nom des AC dans les popUp mais pour ma part, impossible de les faire fonctionner.

M.lib = {
    competences: new Competences(),
    ac: new Ac(),
    ressources: new Ressources(),
    sae: new Sae()
}
M.searchData = {
    sae: [

    ],
    ressources: [

    ],
    ac: [

    ],
    competences: [

    ]
}





M.init = async function () {
    for (let key in M.lib) {
        await M.lib[key].setup();
    }
    M.setSearchData();
}

M.setSearchData = function () {
    let sae = M.lib['sae'].getSae();
    let ressources = M.lib['ressources'].getRessources();
    let ac = M.lib['ac'].getAc();
    let competences = M.lib['competences'].getCompetences();

    for (let key in sae) {
        let keywords = [];
        let description = '';
        let type = 'saé';


        keywords.push(sae[key].code);
        keywords.push(sae[key].id);

        keywords.push(sae[key].semestre);
        keywords.push(type);


        description += sae[key].name;
        M.searchData.sae.push({ keywords, description, type });




    }

    for (let key in ressources) {
        let keywords = [];
        let description = '';
        let type = 'ressource';

        keywords.push(ressources[key].code);
        keywords.push(ressources[key].id);

        keywords.push(ressources[key].semestre);
        keywords.push(ressources[key].name);
        keywords.push(type);



        description += ressources[key].name + '\n';
        description += ressources[key].description;
        M.searchData.ressources.push({ keywords, description, type });

    }

    for (let key in ac) {
        let keywords = [];
        let description = '';
        let type = 'apprentissage critique';

        keywords.push(ac[key].code);
        keywords.push(ac[key].id);
        keywords.push(type);


        description += ac[key].libelle;
        M.searchData.ac.push({ keywords, description, type });

    }

    for (let key in competences) {
        let keywords = [];
        let description = '';
        let type = 'compétence';

        keywords.push(competences[key].name);
        keywords.push(competences[key].id);
        keywords.push(type);


        description += competences[key].description;
        M.searchData.competences.push({ keywords, description, type });

    }

    console.log(M.searchData)
}



export { M }



