function showHome(){
home.style.display="block";
chat.style.display="none";
about.style.display="none";
}

function showChat(){
home.style.display="none";
chat.style.display="block";
about.style.display="none";
}

function showAbout(){
home.style.display="none";
chat.style.display="none";
about.style.display="block";
}

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
r="Faculty details with emails available";

if(m.includes("yrc"))
r="Youth Red Cross – service activities";

if(m.includes("ncc"))
r="NCC – discipline & leadership";

add("Bot",r);
}

function add(s,t){
let c=document.getElementById("chat-box");
c.innerHTML+=`<div><b>${s}:</b> ${t}</div>`;
c.scrollTop=c.scrollHeight;
}
