
import Q from "./questions";

let alltecniques = [];
let currentWord = 0;
let currentAnswer = "";
let currentItem = null;
let currentOptions = [];

function initialize()
{
    //getletalltecniques
    alltecniques=[].concat.apply([], Q.map(x=>x.tecnica.toLowerCase().split(" ")) );

    //set events
    for (let i=0;i<5;i++)
    {
        let option = document.getElementById("a"+i);
        option.onclick = ()=>a(i);
    }
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
        currentWord++;
    }

    //show
    for (let i=0;i<5;i++)
    {
        let option = document.getElementById("a"+i);
        option.textContent=currentOptions[i];
    }

}


function starttest() {
    //get item
    currentItem = Q[Math.floor(Math.random() * Q.length)];

    //video
    let videourl = "https://www.youtube.com/embed/XXXXX?autoplay=1&mute=1".replace("XXXXX", currentItem.video);
    let domVideo = document.getElementById("video");
    domVideo.setAttribute("src", videourl);

    choseOptions();

}

function a(i)
{
    choseOptions();
    console.log(i);
}


initialize();
starttest() ;