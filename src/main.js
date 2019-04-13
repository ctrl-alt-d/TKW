import { fbButton } from 'vanilla-sharing';
import * as t from "./alltecniques";
import Q from "./questions";

import * as firebase from "firebase/app";
import "firebase/database";


const images = require('./assets/*.png');

const htmlVideo = `
<div class="embed-responsive embed-responsive-16by9 play-video">
<iframe class="play-video" id="video" width="420" height="315"
        src="https://www.youtube.com/embed/XXXXX?autoplay=1&mute=1&playlist=XXXXX&loop=1" >
</iframe>
</div>
<div >
<h6 style="color: gray; font-size: 50%;" id="video-codi">XXXXX</h6></div>
`

const htmlImage = `
<div id="picture-div" class="col-12">
    <img id="picture" style="cursor:pointer;" class="img-fluid" src="XXXXX" />
    <h1 style="position: absolute;bottom: 45%;left: 45%;color: #F00000;"><i class="far fa-play-circle"></i></h1>
</div>
<h6 style="color: gray; font-size: 50%;" id="video-codi">XXXXX</h6></div>
`

const htmlLoading = `
<div id="picture-div" class="col-12">
<div>Loading</div>
<img id="picture" class="img-fluid"  height="400px" width="600" />
</div>
`

let recordAll = 0;

function initialize()
{
    //nick
    let nickDom=document.getElementById("nick");    
    t.newRandomNick(Q);
    nickDom.setAttribute("placeholder", t.randomNick);

    //options events
    for (let i=0;i<5;i++)
    {
        let option = document.getElementById("a"+i);
        option.onclick = ()=>answerpressed(i);
    }

    //
    $("#modal-level").modal("show");   

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
    document.getElementById("about-btn").onclick= () =>
    { 
        let olRanking = document.getElementById("ranking-ol");
        olRanking.innerHTML="Carregant ....";
        let queryRef = firebase.database().ref('/all').orderByChild('punts').limitToLast(10);
    
        queryRef.once("value").then( snapshot => 
        {
          olRanking.innerHTML="";
          let prevli = null;
          snapshot.forEach( childSnapshot => 
            {
                let nick = childSnapshot.key;
                let punts = childSnapshot.val();
                let li = document.createElement("li");
                li.appendChild(document.createTextNode(punts.punts + " - " + nick));
                if (prevli == null)
                    olRanking.appendChild(li);
                else{
                    olRanking.insertBefore(li, prevli );
                }
                prevli=li;
            });
        });
    };
    
    var firebaseConfig = {
        apiKey: "AIzaSyB49K0RxNlMvHMPu5N5g3IOLE9NWusZX-0",
        authDomain: "tkdtest-89370.firebaseapp.com",
        databaseURL: "https://tkdtest-89370.firebaseio.com",
        projectId: "tkdtest-89370",
        storageBucket: "tkdtest-89370.appspot.com",
        messagingSenderId: "155292488049"
      };
       
       // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
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
    let newHtmlImage = htmlImage                        
                        .replace("XXXXX", images[ t.currentItem.video.charAt(0)=="_"?t.currentItem.video.substr(1):t.currentItem.video ])
                        .replace("XXXXX", t.currentItem.video);

    domVideo.innerHTML = newHtmlImage;
    domVideo.onclick = () => domVideo.innerHTML = newHtmlVideo;

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
    var database = firebase.database();
    var nick = document.getElementById("nick").value.split("/").join("");
    var nickRef = database.ref('/all/'+ nick );
    var obj = {punts: t.score };
    nickRef.set(obj); 

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
    // nick
    var nick = document.getElementById("nick").value.split("/").join("");
    if (nick == "") document.getElementById("nick").value = t.randomNick;

    t.massageQuestionsClass(l,Q);
    //
    let domscore = document.getElementById("score");
    domscore.innerText = "TKD Objectiu: " + t.levelNameClass() + " ";
    
    $("#modal-level").modal("toggle");
    starttest();
}

initialize();

