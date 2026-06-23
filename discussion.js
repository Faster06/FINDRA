function goHome(){
window.location.href='index.html';
}

function startDiscussion(){
window.location.href='create-discussion.html';
}

function openDiscussion(page){
window.location.href='open-discussion.html?name=' + page;
}

let currentDiscussionType = 'all-users';
let currentCategory = 'all';

function switchDiscussionType(type,event){

currentDiscussionType = type;

const switchButtons =
document.querySelectorAll('.switch-btn');

switchButtons.forEach(btn=>{
btn.classList.remove('active');
});

event.currentTarget.classList.add('active');

updateDiscussions();
}

function filterDiscussions(category,event){

currentCategory = category;

const buttons =
document.querySelectorAll('.filter-btn');

buttons.forEach(btn=>{
btn.classList.remove('active');
});

event.currentTarget.classList.add('active');

updateDiscussions();
}

function updateDiscussions(){

const cards =
document.querySelectorAll('.discussion-card');

const searchValue =
document.getElementById('searchInput')
.value
.toLowerCase();

cards.forEach(card=>{

const text =
card.innerText.toLowerCase();

const isMine =
card.classList.contains('mine');

const categoryMatch =
currentCategory === 'all'
|| card.classList.contains(currentCategory);

let userMatch = true;

if(currentDiscussionType === 'my'){
userMatch = isMine;
}

const searchMatch =
text.includes(searchValue);

if(categoryMatch && userMatch && searchMatch){

card.style.display = 'block';

}else{

card.style.display = 'none';

}

});

}

const searchInput =
document.getElementById('searchInput');

searchInput.addEventListener('input',updateDiscussions);


     loadDiscussions();

function loadDiscussions(){

const grid =
document.getElementById('discussionsGrid');

const savedDiscussions =
JSON.parse(localStorage.getItem('findraDiscussions')) || [];

const defaultDiscussions = [

{
title:'What anime completely changed your taste forever?',
category:'anime',
text:'Some anime completely redefine storytelling and animation.',
user:'Alex Mercer',
time:'2 hours ago',
comments:'328',
views:'19K',
type:'public'
},

{
title:'Best movie cinematography you have ever seen?',
category:'movies',
text:'Some movies are visual masterpieces.',
user:'Mia Carter',
time:'5 hours ago',
comments:'214',
views:'12K',
type:'public'
},

{
title:'Which series had the best final season?',
category:'series',
text:'Some shows deliver legendary finales.',
user:'Sophia Lee',
time:'Yesterday',
comments:'189',
views:'8K',
type:'public'
}

];

const allDiscussions = [
...savedDiscussions,
...defaultDiscussions
];

allDiscussions.forEach((discussion,index)=>{

grid.innerHTML += `

<div class="discussion-card ${discussion.category} ${discussion.type}">

${discussion.type === 'mine' ? `
<button class="delete-btn"
onclick="deleteDiscussion(${index})">
<i class="fa-solid fa-trash"></i>
</button>
` : ''}

<div class="discussion-top">

<div class="avatar">
${discussion.user.charAt(0)}
</div>

<div class="user-info">
<h4>${discussion.user}</h4>
<span>${discussion.time}</span>
</div>

</div>

<h2 class="discussion-title">
${discussion.title}
</h2>

<p class="discussion-text">
${discussion.text}
</p>

<div class="discussion-stats">
<span>💬 ${discussion.comments}</span>
<span>👁 ${discussion.views}</span>
</div>

</div>

`;
});

updateDiscussions();

}
     function deleteDiscussion(index){

if(!confirm('Delete discussion?')){
return;
}

let discussions =
JSON.parse(localStorage.getItem('findraDiscussions')) || [];

discussions.splice(index,1);

localStorage.setItem(
'findraDiscussions',
JSON.stringify(discussions)
);

location.reload();

}
  
