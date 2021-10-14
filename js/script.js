const templates = {
  articleLink: Handlebars.compile(document.querySelector('#template-article-link').innerHTML),
  tagLink: Handlebars.compile(document.querySelector('#template-tag-link').innerHTML),
  tagCloudLink: Handlebars.compile(document.querySelector('#template-cloud-tag-link').innerHTML),
  authorLink: Handlebars.compile(document.querySelector('#template-author-link').innerHTML),
  authorRightLink: Handlebars.compile(document.querySelector('#template-author-right-link').innerHTML),
}

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

function generateTitleLinks(customSelector = ''){

  const titlesList = document.querySelector('.titles');
  titlesList.innerHTML = '';

  const articles = document.querySelectorAll('.post' + customSelector);
    
  let html = '';

  for(let article of articles){
    
    /* get the article id */
    const articleId = article.getAttribute('id');
    
    /* find the title element */
    const articleTitle = article.querySelector('.post-title').innerHTML;
    /* get the title from the title element */

    /* create HTML of the link */
    const linkHTMLData = { id: articleId, title: articleTitle };
    const linkHTML = templates.articleLink(linkHTMLData);

    html = html + linkHTML;

  }
  
  titlesList.innerHTML = html;
  
  const links = document.querySelectorAll('.titles a');
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

}

function generateTags(){

  const allTags = {};


  /* find all articles */
  const articles = document.querySelectorAll('.post')
 
  /* START LOOP: for every article: */
  for (let article of articles){

    /* find tags wrapper */
    const tagsWrapperList = article.querySelector('.post-tags .list');

    /* make html variable with empty string */
    const allTagsData = {tags: []};

    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');

    /* split tags into array */
    const articleTagsArray = articleTags.split(' '); //['cat', 'cactus', 'test']

    let html = '';

    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){

      if(!allTags[tag]) {
        allTags[tag] = 1;
      } else {
        allTags[tag]++;
      }


      /* generate HTML of the link */
      const linkHTML = templates.tagLink({ tagName: tag }); 

      /*?? add generated code to html variable?? */
      html = html + linkHTML;


    /* END LOOP: for each tag */
    }

    /* insert HTML of all the links into the tags wrapper */
    tagsWrapperList.innerHTML = html;

  /* END LOOP: for every article: */
  }

  const tagsCloundContainer = document.querySelector('.sidebar .tags');
  tagsCloundContainer.innerHTML = '';

  let html = '';
  for(const tag in allTags) {

    let className = '';
    if(allTags[tag] < 2) className = 'tag-size-small';
    else if(allTags[tag] < 4) className = 'tag-size-medium';
    else className = 'tag-size-big';

    const linkHTML = templates.tagCloudLink({ tagName: tag, className: className });
    html = html + linkHTML;
  }

  tagsCloundContainer.innerHTML = html;

}

function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  const clickedElement = this;

  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log(href);

  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  console.log(tag);

  /* find all tag links with class active */
  const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');

  /* START LOOP: for each active tag link */
  for(let activeTagLink of activeTagLinks){
    /* remove class active */
    activeTagLink.classList.remove('active');
    /* END LOOP: for each active tag link */
  }

  /* find all tag links with "href" attribute equal to the "href" constant */
  const relatedLinks = document.querySelectorAll('[href="' + href + '"]');

  /* START LOOP: for each found tag link */
  for(let eachTagLink of relatedLinks){

    /* add class active */
    eachTagLink.classList.add('active');

  /* END LOOP: for each found tag link */
  }

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
  /* find all links to tags */
  const tags = document.querySelectorAll('a[href^="#tag-"]');
 
  for(let tag of tags){
    tag.addEventListener('click', tagClickHandler);
  }

  /* END LOOP: for each link */
}

function generateAuthors() {

  const allAuthors = [];

  /* find all articles */
  const articles = document.querySelectorAll('.post')
 
  /* START LOOP: for every article: */
  for (let article of articles){

    const authorWrapper = article.querySelector('.post-author');
    const author = article.getAttribute('data-author');

    const linkHTML = templates.authorLink({ authorName: author });
    
    if(!allAuthors.includes(author)) allAuthors.push(author)

    authorWrapper.innerHTML = linkHTML;
  }

  const sidebarAuthors = document.querySelector('.sidebar .authors');
  sidebarAuthors.innerHTML = '';
  let html = '';

  for(const author of allAuthors) {
    const linkHTML = templates.authorRightLink({ authorName: author });
    html = html + linkHTML;
  }

  sidebarAuthors.innerHTML = html;

}

function authorClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  const clickedElement = this;

  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log(href);

  /* make a new constant "tag" and extract tag from the "href" constant */
  const author = href.replace('#author-', '');

  /* find all tag links with class active */
  const activeAuthorLinks = document.querySelectorAll('a.active[href^="#author-"]');

  /* START LOOP: for each active tag link */
  for(let activeAuthorLink of activeAuthorLinks){
    /* remove class active */
    activeAuthorLink.classList.remove('active');
    /* END LOOP: for each active tag link */
  }

  /* find all tag links with "href" attribute equal to the "href" constant */
  const relatedLinks = document.querySelectorAll('[href=" + href + "]');

  /* START LOOP: for each found tag link */
  for(let eachAuthorLink of relatedLinks){

    /* add class active */
    eachAuthorLink.classList.add('active');

  /* END LOOP: for each found tag link */
  }

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-author="' + author + '"]');
}

function addClickListenersToAuthor(){
  /* find all links to tags */
  const links = document.querySelectorAll('a[href^="#author-"]');
 
  for(let link of links){
    link.addEventListener('click', authorClickHandler);
  }

  /* END LOOP: for each link */
}


generateTitleLinks();
generateTags();
addClickListenersToTags();
generateAuthors();
addClickListenersToAuthor();
