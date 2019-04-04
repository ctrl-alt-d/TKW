import Q from "./questions";
import { fbButton } from 'vanilla-sharing';

const images = require('./assets/*.png');

function initialize()
{

    //options events
    for (let i=0;i<5;i++)
    {
        let option = document.getElementById("a"+i);
        option.onclick = ()=>answerpressed(i);
    }

    //test event
    let test = document.getElementById("test");
    test.onclick = ()=>testpressed();

    //
    let okbbton = document.getElementById("ok-button");
    okbbton.onclick = ()=>reviewpressed();
    let kobbton = document.getElementById("ko-button");
    kobbton.onclick = ()=>reviewpressed();
    $('#modal-ok').on('hidden.bs.modal', ()=>reviewpressed() );
    $('#modal-ko').on('hidden.bs.modal', ()=>reviewpressed() );

    //levels
    for (let i=0; i<6; i++)
    {
        let domlevel = document.getElementById("level-"+i);
        domlevel.onclick = ()=>setlevel(i);
    }
    
    $("#modal-level").modal("show");             

}


function choseOptions()
{
    let currentOptions = choseOptionsClass();

    //show
    for (let i=0;i<5;i++)
    {
        let option = document.getElementById("a"+i);
        option.textContent=currentOptions[i];
    }

}

function starttest() {

    //clear answer
    let myanswer = document.getElementById("my-answer");
    myanswer.textContent = "";

    //get item
    getItemClass();
    
    //video
    document.getElementById("picture-div").style.display="none";
    [].forEach.call( document.getElementsByClassName("play-video") , (x) => x.style.display="" );
    let videourl = "https://www.youtube.com/embed/XXXXX?autoplay=1&mute=1&playlist=XXXXX&loop=1".replace("XXXXX", currentItem.video).replace("XXXXX", currentItem.video);
    let domVideo = document.getElementById("video");
    domVideo.setAttribute("src", videourl);

    choseOptions();

}

function answerpressed(i)
{
    let myanswer = document.getElementById("my-answer");
    myanswer.textContent = (myanswer.textContent + " " + currentOptions[i]).trim();
    currentWord++;
    choseOptions();
}

function testpressed()
{
    let myanswer = document.getElementById("my-answer");
    let correct = checkCorrectClass(myanswer.textContent);

    let domscore = document.getElementById("score");
    domscore.innerText = "TKD (" + levelsNames[level] + ") " + score ;
    
    showreview(correct);

}

function showreview(correct)
{

    let answerok = document.getElementById("answer-ok");
    answerok.textContent = currentItem.tecnica;
    let answerokalt = document.getElementById("answer-ok-alt");
    answerokalt.textContent = currentItem.alt;

    let answerko = document.getElementById("answer-ko");
    answerko.textContent = currentItem.tecnica;
    let answerkoalt = document.getElementById("answer-ko-alt");
    answerkoalt.textContent = currentItem.alt;

    $(correct?"#modal-ok":"#modal-ko").modal("toggle");

}

function reviewpressed()
{
    currentWord=0;
    starttest();
}

function setlevel(l)
{
    massageQuestionsClass(l);
    //
    let domscore = document.getElementById("score");
    domscore.innerText = "TKD Objectiu: " + levelNameClass() + " ";
    
    $("#modal-level").modal("toggle");
    starttest();
}


initialize();

document.getElementById("share").onclick= () =>
{ 
    fbButton({
        url: 'https://ctrl-alt-d.github.io/TKW/',
    });
}

/* --------------- class elements ----------------- */

let alltecniques = [];
let currentWord = 0;
let previousTechnique = "";
let currentItem = null;
let currentOptions = [];
let score = 0;
let level = 0;
let MyQ = [];
let levelsNames = ["Groc","Taronja","Verd","Blau","Marró","Negre"];

function getItemClass() {
    //get item
    do {
        currentItem = MyQ[Math.floor(Math.random() * MyQ.length)];
    } while (currentItem.tecnica == previousTechnique);
    previousTechnique = currentItem.tecnica;
}

function levelNameClass() {
    let levelnumber = { "groc":0, "taronja": 1, "verd":2, "blau": 3, "marró":4, "negre": 5 };
    return levelsNames[level];
}

function massageQuestionsClass(l) {
    level = l;

    let levelnumber = { "groc":0, "taronja": 1, "verd":2, "blau": 3, "marró":4, "negre": 5 };

    MyQ = Q.filter(x=>levelnumber[x.level] <= level );
    
    //tots els noms a majúscules amb un sol espai
    MyQ.forEach( x=> x.tecnica = x.tecnica.toUpperCase().split(" ").filter( x=> x!="" ).join(" ") );
    MyQ.forEach( x=> x.alt = x.alt.toUpperCase().split(" ").filter( x=> x!="" ).join(" ") );

    //getletalltecniques
    alltecniques=[].concat.apply([], MyQ.map(x=>x.tecnica.split(" ").filter( x=> x!="" )) );
    if (alltecniques.length<5) alltecniques = alltecniques.concat([" - "," :) "," :( ", " kiap "]);

}

function checkCorrectClass(answer)
{
    let correct = answer == currentItem.tecnica || 
                 ( currentItem.alt != "" && answer == currentItem.alt ); 
    score += correct ? 1 : -1;
    score = score < 0 ? 0 : score;
    return correct;
}


function choseOptionsClass()
{
    //
    let currentItemWords = (currentItem.tecnica + " " + currentItem.alt ) .split(" ").filter( x=> x!="" );
    let alltecniquesWithOutCurrentItemWords = alltecniques.filter( x=> x!="" && !currentItemWords.includes(x) );

    //take 5
    currentOptions=[];    
    do 
    {
        let word = alltecniquesWithOutCurrentItemWords[Math.floor(Math.random() * alltecniquesWithOutCurrentItemWords.length)];
        if (!currentOptions.includes(word)) {
            currentOptions.push(word);
        }
    }
    while( currentOptions.length < 5);

    //insert current word
    let rightOptionTecnica = -1;
    let rightWordTec = "";
    if (currentWord < currentItem.tecnica.split(" ").filter( x=> x!="" ).length)
    {
        rightWordTec = currentItem.tecnica.split(" ").filter( x=> x!="" )[currentWord];
        rightOptionTecnica = Math.floor(Math.random() * currentOptions.length);
        currentOptions[rightOptionTecnica] = rightWordTec;
    }

    //insert alt word
    if (currentWord < currentItem.alt.split(" ").filter(x=>x!="").length)
    {
        let rightWordAlt = currentItem.alt.split(" ").filter( x=> x!="" )[currentWord];
        if (rightWordAlt != rightWordTec)
        {
            let rightOptionAlt = -1;
            do {rightOptionAlt = Math.floor(Math.random() * currentOptions.length)} while(rightOptionAlt == rightOptionTecnica ) ;
            currentOptions[rightOptionAlt] = rightWordAlt;    
        }
    }

    return currentOptions;

}