function show(id){

home.style.display="none";
chat.style.display="none";
info.style.display="none";

document.getElementById(id).style.display="block";
}

function logout(){
window.location="index.html";
}

/* SIMPLE CHAT DEMO */

function send(){

let i=document.getElementById("userInput");
let m=i.value.toLowerCase();

if(!m)return;

add("You",m);
i.value="";

let r="Ask about faculty, programs, library, YRC, NCC.";

if(m.includes("program"))
r="B.Sc, B.Com, BCA, BA, M.Sc, M.Com, MBA";

if(m.includes("faculty"))
r="Faculty details & emails will be added";

if(m.includes("yrc"))
r="Youth Red Cross activities";

if(m.includes("ncc"))
r="NCC training & camps";

add("Bot",r);
}

function add(s,t){
let c=document.getElementById("chat-box");
c.innerHTML+=`<div><b>${s}:</b> ${t}</div>`;
c.scrollTop=c.scrollHeight;
}
