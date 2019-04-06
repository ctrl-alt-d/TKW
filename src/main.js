import { fbButton } from 'vanilla-sharing';
import * as t from "./alltecniques";
import Q from "./questions";


const images = require('./assets/*.png');

const htmlVideo = `
<div class="embed-responsive embed-responsive-16by9 play-video">
<iframe class="play-video" id="video" width="420" height="315"
        src="https://www.youtube.com/embed/XXXXX?autoplay=1&mute=1&playlist=XXXXX&loop=1" >
</iframe>
</div>
<div ><h6 style="color: gray; font-size: 50%;" id="video-codi">XXXXX</h6></div>
`
const htmlLoading = `
<div id="picture-div" class="col-12 col-lg-6">
<div>Loading</div>
<img id="picture" class="img-fluid" />
</div>
`

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
    for (let i=0; i<6; i++)
    {
        let domlevel = document.getElementById("level-"+i);
        domlevel.onclick = ()=>setlevel(i);
    }
    
    //
    document.getElementById("share").onclick= () =>
    { 
        fbButton({
            url: 'https://ctrl-alt-d.github.io/TKW/',
        });
    }

    //
    $("#modal-level").modal("show");             

}


function choseOptions()
{
    t.choseOptionsClass();

    //show
    for (let i=0;i<5;i++)
    {
        let option = document.getElementById("a"+i);
        option.textContent=t.currentOptions[i];
    }

}

function starttest() {

    //clear answer
    let myanswer = document.getElementById("my-answer");
    myanswer.textContent = "";

    //get item
    t.getItemClass();
    
    //$("#video-div").fadeIn( "slow" );
    let domVideo = document.getElementById("video-div");
    domVideo.innerHTML=htmlLoading;
    let newHtmlVideo = htmlVideo
                        .replace("XXXXX", t.currentItem.video)
                        .replace("XXXXX", t.currentItem.video)
                        .replace("XXXXX", t.currentItem.video);
    domVideo.innerHTML = newHtmlVideo;

    choseOptions();

}

function answerpressed(i)
{
    let myanswer = document.getElementById("my-answer");
    myanswer.textContent = (myanswer.textContent + " " + t.currentOptions[i]).trim();
    t.increasseCurrentWord();
    choseOptions();
}

function testpressed()
{
    //$("#video-div").fadeOut( "slow" );
 
    let myanswer = document.getElementById("my-answer");
    let correct = t.checkCorrectClass(myanswer.textContent);

    let domscore = document.getElementById("score");
    domscore.innerText = "TKD (" + t.levelsNames[t.level] + ") " + t.score ;
    
    showreview(correct);

}

function showreview(correct)
{

    let answerok = document.getElementById("answer-ok");
    answerok.textContent = t.currentItem.tecnica;
    let answerokalt = document.getElementById("answer-ok-alt");
    answerokalt.textContent = t.currentItem.alt;

    let answerko = document.getElementById("answer-ko");
    answerko.textContent = t.currentItem.tecnica;
    let answerkoalt = document.getElementById("answer-ko-alt");
    answerkoalt.textContent = t.currentItem.alt;

    $(correct?"#modal-ok":"#modal-ko").modal("toggle");

}

function reviewpressed()
{
    t.resetCurrentWord();
    starttest();
}

function setlevel(l)
{
    t.massageQuestionsClass(l,Q);
    //
    let domscore = document.getElementById("score");
    domscore.innerText = "TKD Objectiu: " + t.levelNameClass() + " ";
    
    $("#modal-level").modal("toggle");
    starttest();
}

initialize();

