
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

function generateTitleLinks(){

  const titlesList = document.querySelector('.titles');
  titlesList.innerHTML = '';

  const articles = document.querySelectorAll('.post')
    
  let html = '';

  for(let article of articles){
    
    /* get the article id */
    const articleId = article.getAttribute('id');
    
    /* find the title element */
    const articleTitle = article.querySelector('.post-title').innerHTML;
    /* get the title from the title element */

    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

    html = html + linkHTML;

  }
  
  titlesList.innerHTML = html;
  
  const links = document.querySelectorAll('.titles a');
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

}

generateTitleLinks();

const optArticleTagsSelector = '.tags'
optArticleTagsSelector = '.post-tags .list'

function generateTags(){

  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
 
    for(let article of articles){

  /* START LOOP: for every article: */
  for (let article of articles){
    console.log(articles)
  }

    /* find tags wrapper */
    const tagsWrapperList = article.querySelector(optArticleTagsSelector);

    /* make html variable with empty string */
    let html = '';

    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
      console.log(articleTags);

    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);

    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){


      /* generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
      console.log(linkHTML);

      /*?? add generated code to html variable?? */
 

    /* END LOOP: for each tag */
    for (let tag ){
      if (tag > 5) break;
      console.log(tag)
    

    /* insert HTML of all the links into the tags wrapper */
    tagsWrapperList.innerHTML = tagsWrapperList.innerHTML + linkHTML;
    html = html + linkHTML;

  /* END LOOP: for every article: */
  for (let article ){
    if (article > 5) break;
    console.log(article)
}

tagsWrapperList.innerHTML = html;
    }
  }
generateTags()


function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  const clickedElement = this;
  console.log('Tag was clicked');
  console.log(MouseEvent + '.');

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = clickedElement('this');

  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log(href);

  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  console.log(tag);

  /* find all tag links with class active */
  const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
    console.log(activeTagLinks);

  /* START LOOP: for each active tag link */
  for(let activeTagLink of activeTagLinks){

    /* remove class active */
    activeTagLink.classList.remove('active');

  }

  /* END LOOP: for each active tag link */

  /* find all tag links with "href" attribute equal to the "href" constant */
  const tag = article.querySelector(href);

  /* START LOOP: for each found tag link */

    /* add class active */

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  console.log(generateTitleLinks)
}

function addClickListenersToTags(){
  /* find all links to tags */

  /* START LOOP: for each link */

    /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

addClickListenersToTags();