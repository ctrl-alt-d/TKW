import Q from "./questions";
import { fbButton } from 'vanilla-sharing';

const images = require('./assets/*.png');


let alltecniques = [];
let currentWord = 0;
let previousTechnique = "";
let currentItem = null;
let currentOptions = [];
let score = 0;
let level = 0;
let MyQ = [];
let levelsNames = ["Groc","Taronja","Verd","Blau","Marró","Negre"];

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
    //take 5
    currentOptions=[];
    do 
    {
        let word = alltecniques[Math.floor(Math.random() * alltecniques.length)];
        if (!currentOptions.includes(word)) {
            currentOptions.push(word);
        }
    }
    while( currentOptions.length < 5);

    //sure word is in
    let rightOptionTecnica = -1;
    if (currentWord < currentItem.tecnica.split(" ").length)
    {
        let rightWord = currentItem.tecnica.split(" ")[currentWord];
        rightOptionTecnica = currentOptions.indexOf(rightWord);
        if (rightOptionTecnica == -1) rightOptionTecnica = Math.floor(Math.random() * currentOptions.length);
        currentOptions[rightOptionTecnica] = rightWord;
    }

    //sure alt also present
    if (currentWord < currentItem.alt.split(" ").filter(x=>x!="").length)
    {
        let rightWord = currentItem.alt.split(" ")[currentWord];
        let rightOptionAlt = currentOptions.indexOf(rightWord);
        if (rightOptionAlt == -1) do {rightOptionAlt = Math.floor(Math.random() * currentOptions.length)} while(rightOptionAlt !=rightOptionTecnica ) ;
        currentOptions[rightOptionAlt] = rightWord;
    }

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
    do {
        currentItem = MyQ[Math.floor(Math.random() * MyQ.length)];
    } while (currentItem.tecnica == previousTechnique);
    previousTechnique = currentItem.tecnica;
    
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
    let correct = myanswer.textContent == currentItem.tecnica || 
                  ( currentItem.alt != "" && myanswer.textContent == currentItem.alt ); 

    score += correct ? 1 : -1;
    score = score < 0 ? 0 : score;

    let domscore = document.getElementById("score");
    domscore.innerText = "TKW (" + levelsNames[level] + ") " + score ;
    
    showreview(correct);

}

function showreview(correct)
{

    let answerok = document.getElementById("answer-ok");
    answerok.textContent = currentItem.tecnica;

    let answerko = document.getElementById("answer-ko");
    answerko.textContent = currentItem.tecnica;

    $(correct?"#modal-ok":"#modal-ko").modal("toggle");

}

function reviewpressed()
{
    currentWord=0;
    starttest();
}

function setlevel(l)
{
    level = l;
    let levelnumber = { "groc":0, "taronja": 1, "verd":2, "blau": 3, "marró":4, "negre": 5 };

    MyQ = Q.filter(x=>levelnumber[x.level] <= level );
    
    //tots els noms a majúscules amb un sol espai
    MyQ.forEach( x=> x.tecnica = x.tecnica.toUpperCase().split(" ").join(" ") );
    MyQ.forEach( x=> x.alt = x.alt.toUpperCase().split(" ").join(" ") );

    //getletalltecniques
    alltecniques=[].concat.apply([], MyQ.map(x=>x.tecnica.split(" ")) );
    if (alltecniques.length<5) alltecniques = alltecniques.concat([" - "," :) "," :( ", " kiap "]);

    //
    let domscore = document.getElementById("score");
    domscore.innerText = "TKW Objectiu: " + levelsNames[level] + " ";
    
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

