
let alltecniques = [];
let previousTechnique = "";
let MyQ = [];

export let currentWord = 0;
export let currentItem = null;
export let currentOptions = [];
export let score = 0;
export let level = 0;
export let levelsNames = ["Groc", "Taronja", "Verd", "Blau", "Marró", "Negre"];
export function resetCurrentWord() {
    currentWord=0;
}
export function increasseCurrentWord() {
    currentWord++;
}
export function getItemClass() {
    //get item
    do {
        currentItem = MyQ[Math.floor(Math.random() * MyQ.length)];
    } while (currentItem.tecnica == previousTechnique);
    previousTechnique = currentItem.tecnica;
}
export function levelNameClass() {
    let levelnumber = { "groc": 0, "taronja": 1, "verd": 2, "blau": 3, "marró": 4, "negre": 5 };
    return levelsNames[level];
}
export function massageQuestionsClass(l, q ) {
    level = l;
    let levelnumber = { "groc": 0, "taronja": 1, "verd": 2, "blau": 3, "marró": 4, "negre": 5 };
    MyQ = q.filter(x => levelnumber[x.level] <= level);
    //tots els noms a majúscules amb un sol espai
    MyQ.forEach(x => x.tecnica = x.tecnica.toUpperCase().split(" ").filter(x => x != "").join(" "));
    MyQ.forEach(x => x.alt = x.alt.toUpperCase().split(" ").filter(x => x != "").join(" "));
    //getletalltecniques
    alltecniques = [].concat.apply([], MyQ.map(x => x.tecnica.split(" ").filter(x => x != "")));
    if (alltecniques.length < 5)
        alltecniques = alltecniques.concat([" - ", " :) ", " :( ", " kiap "]);
}
export function checkCorrectClass(answer) {
    let correct = answer == currentItem.tecnica ||
        (currentItem.alt != "" && answer == currentItem.alt);
    score += correct ? 1 : -1;
    score = score < 0 ? 0 : score;
    return correct;
}
export function choseOptionsClass() {
    //
    let currentItemWords = (currentItem.tecnica + " " + currentItem.alt).split(" ").filter(x => x != "");
    let alltecniquesWithOutCurrentItemWords = alltecniques.filter(x => x != "" && !currentItemWords.includes(x));
    //take 5
    currentOptions = [];
    do {
        let word = alltecniquesWithOutCurrentItemWords[Math.floor(Math.random() * alltecniquesWithOutCurrentItemWords.length)];
        if (!currentOptions.includes(word)) {
            currentOptions.push(word);
        }
    } while (currentOptions.length < 5);
    //insert current word
    let rightOptionTecnica = -1;
    let rightWordTec = "";
    if (currentWord < currentItem.tecnica.split(" ").filter(x => x != "").length) {
        rightWordTec = currentItem.tecnica.split(" ").filter(x => x != "")[currentWord];
        rightOptionTecnica = Math.floor(Math.random() * currentOptions.length);
        currentOptions[rightOptionTecnica] = rightWordTec;
    }
    //insert alt word
    if (currentWord < currentItem.alt.split(" ").filter(x => x != "").length) {
        let rightWordAlt = currentItem.alt.split(" ").filter(x => x != "")[currentWord];
        if (rightWordAlt != rightWordTec) {
            let rightOptionAlt = -1;
            do {
                rightOptionAlt = Math.floor(Math.random() * currentOptions.length);
            } while (rightOptionAlt == rightOptionTecnica);
            currentOptions[rightOptionAlt] = rightWordAlt;
        }
    }
    return currentOptions;
}
