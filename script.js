function logout(){
window.location="index.html";
}

/* RECENT SEARCH */

function loadRecent(){
let r = JSON.parse(localStorage.getItem("recent") || "[]");

let list = document.getElementById("recentList");
list.innerHTML="";

r.forEach(q=>{
let li=document.createElement("li");
li.innerHTML=q;
li.onclick=()=>askSample(q);
list.appendChild(li);
});
}

function saveRecent(q){

let r = JSON.parse(localStorage.getItem("recent") || "[]");

if(!r.includes(q))
r.unshift(q);

if(r.length>5) r.pop();

localStorage.setItem("recent",JSON.stringify(r));
loadRecent();
}

/* SAMPLE CLICK */

function askSample(q){
document.getElementById("userInput").value=q;
send();
}

/* CHAT */

function send(){

let i=document.getElementById("userInput");
let m=i.value.trim();

if(!m)return;

add("You",m);
i.value="";

saveRecent(m);

let r = getReply(m.toLowerCase());

setTimeout(()=>add("Bot",r),200);
}

function add(s,t){
let c=document.getElementById("chat-box");
c.innerHTML+=`<div><b>${s}:</b> ${t}</div>`;
c.scrollTop=c.scrollHeight;
}

/* BASIC KNOWLEDGE */

function getReply(msg){

if(msg.includes("program"))
return "B.Sc, B.Com, BCA, BA, M.Sc, M.Com, MBA";

if(msg.includes("faculty"))
return "Faculty details & emails available in Faculty Directory";

if(msg.includes("java"))
return "Java Book Call Number – 005.133";

if(msg.includes("yrc"))
return "Youth Red Cross conducts health & service activities";

return "Ask about programs, faculty, library, YRC, NCC.";
}

window.onload=loadRecent;
