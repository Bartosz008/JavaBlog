
const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;

  /*[DONE] remove class 'active' from all article links  */
  const activeLink = document.querySelector('.titles a.active');
  if(activeLink) activeLink.classList.remove('active');

  /* [IN PROGRESS] add class 'active' to the clicked link */
  clickedElement.classList.add('active');

  /*[DONE] remove class 'active' from all articles */
  const activeArticle = document.querySelector('.post.active');
  if(activeArticle) activeArticle.classList.remove('active');

  /* ??get 'href' attribute from the clicked link ??*/
  const href = clickedElement.getAttribute('href'); 

  /*?? find the correct article using the selector (value of 'href' attribute)?? */
  const targetArticle = document.querySelector(href);
  targetArticle.classList.add('active');

}

const links = document.querySelectorAll('.titles a');
for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

/*  js ,titles a       */
document.getElementById('test-button').addEventListener('click', function(){
  const links = document.querySelectorAll('.titles a');
  console.log('links:', links);
});

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* remove contents of titleList */
  function clearMessages(){
    document.getElementById('messages').innerHTML = '';
  }
  /* for each article */
  const optArticleSelector = 'article';
  optTitleSelector = '.post-title';
    
  let html = '';

  for(let article of articles){
  }
    /* get the article id */
  const Id = articleId.getAttribute('Id'),
    /* find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    /* get the title from the title element */

    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('href:', span);
    /* insert link into titleList */
    html = html + linkHTML;

    link.addEventListener('click', titleClickHandler);
  }
    titleList.innerHTML = titleList.innerHTML + linkHTML;


generateTitleLinks();
