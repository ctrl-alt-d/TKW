import Q from "./questions";
import { fbButton } from 'vanilla-sharing';

let alltecniques = [];
let currentWord = 0;
let currentAnswer = "";
let currentItem = null;
let currentOptions = [];
let score = 0;
let level = 0;
let MyQ = [];
let levelsNames = ["Noob","Middle","Pro"];

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

    //levels
    for (let i=0; i<3; i++)
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
    if (currentWord < currentItem.tecnica.split(" ").length)
    {
        let rightWord = currentItem.tecnica.split(" ")[currentWord];
        let rightOption = currentOptions.indexOf(rightWord);
        if (rightOption == -1) rightOption = Math.floor(Math.random() * currentOptions.length);
        currentOptions[rightOption] = rightWord;
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
    currentItem = MyQ[Math.floor(Math.random() * MyQ.length)];

    //video
    let videourl = "https://www.youtube.com/embed/XXXXX?autoplay=1&mute=1&&loop=1".replace("XXXXX", currentItem.video);
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
    let correct = myanswer.textContent == currentItem.tecnica; 

    score += correct ? 1 : -1;

    let domscore = document.getElementById("score");
    domscore.innerText = "TKW (" + levelsNames[level] + ") Test. Score: " + score ;
    
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

    MyQ = Q.filter(x=>x.level <= level && x.video != "" );

    console.log('MyQ :', MyQ);
    
    //tots els noms a majúscules amb un sol espai
    MyQ.forEach( x=> x.tecnica = x.tecnica.toUpperCase().split(" ").join(" ") );

    //getletalltecniques
    alltecniques=[].concat.apply([], MyQ.map(x=>x.tecnica.split(" ")) );
    if (alltecniques.length<5) alltecniques = alltecniques.concat([" - "," :) "," :( ", " kiap "]);

    //
    let domscore = document.getElementById("score");
    domscore.innerText = "TKW Test " + levelsNames[level] + " ";


    $("#modal-level").modal("toggle");
    starttest();
}

initialize();

document.getElementById("share").onclick= () =>
{ 
    console.log('ok :', "ok");
    fbButton({
        url: 'https://ctrl-alt-d.github.io/TKW/',
    });
}

