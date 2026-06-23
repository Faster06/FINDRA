// PROFILE PAGE
document.getElementById('profileBtn').addEventListener('click',()=>{

const user =
localStorage.getItem('findraUser');

if(user){
window.location.href='profile.html';
}else{
window.location.href='login.html';
}

});

// HOME CLICK
document.getElementById('homeBtn').addEventListener('click',()=>{
window.location.href = 'index.html';
});

// OPEN NEWS / DISCUSSION FUNCTION
function openPage(page){
window.location.href = page + '.html';
}


function openNews(news){
window.location.href='news-details.html?news='+news;
}



function openExplore(){
window.location.href='trending.html';
}

function openMore(){
window.location.href='news.html';
}

function openOther(){
window.location.href='discussions.html';
}

function startDiscussion(){
window.location.href='create-discussion.html';
}

function filterCategory(category, element){

const cards = document.querySelectorAll('.news-card');

cards.forEach(card=>{

if(category === 'all'){
card.style.display = 'block';
}
else if(card.classList.contains(category)){
card.style.display = 'block';
}
else{
card.style.display = 'none';
}

});

/* ACTIVE BUTTON */

document.querySelectorAll('.category').forEach(btn=>{
btn.classList.remove('active');
});

element.classList.add('active');

}

const titles=[
{
name:'Solo Leveling',
category:'Anime',
image:'sololeveling poster.jpg',
page:'solo-leveling'
},
{
name:'One-Piece',
category:'Anime',
image:'onepeace poster.jpg',
page:'one piece'
},
{
name:'Oppenheimer',
category:'Movie',
image:'oppenheimer poster.jpg',
page:'oppenheimer'
},
{
name:'Breaking Bad',
category:'Series',
image:'breaking bad poster.jpg',
page:'breaking-bad'
},
{
name:'Spider-Verse',
category:'Movie',
image:'spiderverse.jpg',
page:'spider-verse'
},
{
name:'Naruto',
category:'Anime',
image:'naruto poster.jpg',
page:'naruto'
},
{
name:'Avatar 3',
category:'Movie',
image:'avatar 3 poster.jpg',
page:'avatar-3'
},
{
name:'The Last of Us',
category:'Series',
image:'thelastofus poster.jpg',
page:'the-last-of-us'
},
{
name:'Detective Conan',
category:'Anime',
image:'detectiveconan poster.jpg',
page:'detective-conan'
},
{
name:'Attack on Titan',
category:'Anime',
image:'attackontitan poster.jpg',
page:'attack-on-titan'
},
{
name:'Fairy Tail',
category:'Anime',
image:'fairytail poster.jpg',
page:'fairy-tail'
},
{
name:'Grand Blue',
category:'Anime',
image:'grandblue poster.jpg',
page:'grand-blue'
},
{
name:'Blue Lock',
category:'Anime',
image:'bluelock poster.jpg',
page:'blue-lock'
},
{
name:'Liar Game',
category:'Anime',
image:'liargame poster.jpg',
page:'liar-game'
}
];

const input=document.querySelector('.search-bar input');
const results=document.getElementById('searchResults');

input.addEventListener('input',()=>{
const value=input.value.toLowerCase().trim();

if(value===''){
results.style.display='none';
return;
}
const filtered=titles.filter(title=>
title.name.toLowerCase().includes(value)
);

if(filtered.length===0){
results.innerHTML=`
<div class="search-item">
<div class="search-info">
<h4>Nothing found</h4>
<p>Try another title</p>
</div>
</div>
`;
results.style.display='block';
return;
}

results.innerHTML='';

filtered.forEach(title=>{
results.innerHTML+=`
<div class="search-item" onclick="openTitle('${title.page}')">
<img src="${title.image}">
<div class="search-info">
<h4>${title.name}</h4>
<p>${title.category}</p>
</div>
</div>
`;
});
results.style.display='block';
});

function openTitle(page){
window.location.href='title.html?name='+page;
}

window.addEventListener('click',(e)=>{
if(!e.target.closest('.search-bar') && !e.target.closest('.search-results')){
results.style.display='none';
}
});
