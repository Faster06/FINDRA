const params = new URLSearchParams(window.location.search);
const news = params.get('news');

const newsData = {

'solo-leveling-season2':{
title:'Solo Leveling Season 2 Officially Announced',
image:'sololeveling.jpg',
date:'May 20, 2024',
category:'ANIME',
text:'The second season of Solo Leveling has officially been announced after the incredible success of the first season. Fans around the world are excited to see Sung Jin-Woo continue his journey and face even stronger enemies. The new season promises improved animation, larger battles and deeper character development.'
},

'oppenheimer-oscars':{
title:'Oppenheimer Wins Big at the Oscars',
image:'oppenheimer.jpg',
date:'May 18, 2024',
category:'MOVIE',
text:'Christopher Nolan’s Oppenheimer dominated the Academy Awards this year, winning multiple major categories including Best Picture and Best Director. Critics praised the film for its storytelling, cinematography and performances.'
},

'last-of-us-season2':{
title:'The Last of Us Season 2 Begins Production',
image:'thelastofus.jpg',
date:'May 10, 2024',
category:'SERIES',
text:'HBO officially confirmed that production for The Last of Us Season 2 has started. Fans are expecting a darker and more emotional continuation based on the events of the second game.'
},

'spiderverse-release':{
title:'Spider-Verse 3 Gets Official Release Window',
image:'spiderverse.jpg',
date:'May 4, 2024',
category:'CARTOON',
text:'Sony Pictures revealed the release window for Spider-Verse 3. The animated franchise remains one of the most visually impressive superhero projects ever created.'
}

};

const currentNews = newsData[news];

if(currentNews){

document.getElementById('newsTitle').textContent = currentNews.title;

document.getElementById('newsImage').src = currentNews.image;

document.getElementById('newsDate').textContent = currentNews.date;

document.getElementById('newsCategory').textContent = currentNews.category;

document.getElementById('newsText').textContent = currentNews.text;

document.title = 'FINDRA — ' + currentNews.title;

}

function goHome(){
window.location.href='index.html';
}

function goBack(){
window.history.back();
}

function openNews(news){
window.location.href='news-details.html?news='+news;
}
