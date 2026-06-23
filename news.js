function goHome(){
window.location.href='index.html';
}

function openNews(news){
window.location.href='news-details.html?news='+news;
}

function filterNews(category){
const cards=document.querySelectorAll('.news-card');
const buttons=document.querySelectorAll('.filter-btn');

buttons.forEach(btn=>btn.classList.remove('active'));
event.target.classList.add('active');

cards.forEach(card=>{
if(category==='all'){
card.style.display='block';
}else if(card.classList.contains(category)){
card.style.display='block';
}else{
card.style.display='none';
}
});
}

const searchInput=document.getElementById('searchInput');

searchInput.addEventListener('input',function(){
const value=this.value.toLowerCase();
const cards=document.querySelectorAll('.news-card');

cards.forEach(card=>{
const text=card.innerText.toLowerCase();
card.style.display=text.includes(value)?'block':'none';
});
});
