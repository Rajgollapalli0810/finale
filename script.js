const secretDate = "11102020";

function unlock(){

let pass =
document.getElementById("password").value;

if(pass === secretDate){

document.getElementById("loginScreen")
.classList.remove("active");

document.getElementById("letterScreen")
.classList.add("active");

typeLetter();

}else{
alert("Wrong Secret Date ❤️");
}
}

const letter = `
My Love,

Today is your special day.

Every moment with you became
a beautiful memory.

I created this magical garden
where every rose holds a piece
of our journey together.

Click each rose and relive
our memories.

Happy Birthday ❤️
`;

function typeLetter(){

let i=0;

let target =
document.getElementById("typewriter");

let interval =
setInterval(()=>{

target.innerHTML += letter.charAt(i);

i++;

if(i>=letter.length)
clearInterval(interval);

},40);
}

function showGarden(){

document.getElementById("letterScreen")
.classList.remove("active");

document.getElementById("gardenScreen")
.classList.add("active");
}

const memories = [

{
title:"Our First Photo ❤️",
image:"images/memory1.jpg",
text:"Write your first memory here"
},

{
title:"Our First Date ❤️",
image:"images/memory2.jpg",
text:"Write memory here"
},

{
title:"The Day I Realized ❤️",
image:"images/memory3.jpg",
text:"Write memory here"
},

{
title:"Our Favorite Trip ❤️",
image:"images/memory4.jpg",
text:"Write memory here"
},

{
title:"Funny Moment ❤️",
image:"images/memory5.jpg",
text:"Write memory here"
},

{
title:"Forever Together ❤️",
image:"images/memory6.jpg",
text:"Write memory here"
}

];

function showMemory(index){

document.getElementById("memoryPopup")
.style.display="block";

document.getElementById("memoryImage")
.src = memories[index].image;

document.getElementById("memoryTitle")
.innerText = memories[index].title;

document.getElementById("memoryText")
.innerText = memories[index].text;
}

function closeMemory(){

document.getElementById("memoryPopup")
.style.display="none";
}
