
document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });

  event.preventDefault();
  const titleClickHandler = function(){
    console.log('Link was clicked!');

/*[DONE] remove class 'active' from all article links  */
const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}

  /* [IN PROGRESS] add class 'active' to the clicked link */
  console.log('clickedElement:', clickedElement);

  /*[DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.titles a.active');

for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
}

  /* ??get 'href' attribute from the clicked link ??*/
  var div = document.getAtribute('href')
  const clickElement = this;
  const href = clickedElement.getAttribute('href');

  /*?? find the correct article using the selector (value of 'href' attribute)?? */
  const targetArticle = document.querySelector('href');

  /* add class 'active' to the correct article */
  console.log('targetArticle:', targetArticle);

  }
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

{
    const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

    /* remove contents of titleList */
  /* ... */

  /* find all the articles and save them to variable: articles */
  /* ... */

  let html = '';

  for(let article of articles){
    /* get the article id */

    /* find the title element */

    /* get the title from the title element */

    /* create HTML of the link */

    /* insert link into titleList */
    html = html + linkHTML;
  }

  titleList.innerHTML = html;
  
}

generateTitleLinks();

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
