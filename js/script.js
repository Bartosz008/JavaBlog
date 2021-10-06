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
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

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
    let html = '';

    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');

    /* split tags into array */
    const articleTagsArray = articleTags.split(' '); //['cat', 'cactus', 'test']

    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){

      if(!allTags[tag]) {
        allTags[tag] = 1;
      } else {
        allTags[tag]++;
      }


      /* generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
      console.log(linkHTML);

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

  for(const tag in allTags) {

    let className = '';
    if(allTags[tag] < 2) className = 'tag-size-small';
    else if(allTags[tag] < 4) className = 'tag-size-medium';
    else className = 'tag-size-big';

    const tagLink = '<li><a class="' + className + '" href="#tag-' + tag + '">' + tag + '</a> <span>(' + allTags[tag] + ')</span></li>';
    tagsCloundContainer.innerHTML += tagLink; 
  }

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
    const linkHTML = '<a href="#author-' + author + '">by <span>' + author + '</span></a></li>';
    
    if(!allAuthors.includes(author)) allAuthors.push(author)

    authorWrapper.innerHTML = linkHTML;
  }

  const sidebarAuthors = document.querySelector('.sidebar .authors');
  sidebarAuthors.innerHTML = '';

  for(const author of allAuthors) {
    const authorLink = '<li><a href="#author-' + author + '"><span class="author-name">' + author + '</span></a></li>'
    sidebarAuthors.innerHTML += authorLink;
  }

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

function optTagsListSelector (tags,list);
optCloudClassCount (5);
optCloudClassPrefix  (tag-size);
calculateTagClass (count, params);

params.max = Math.max(tags[tag], params.max);
return params;

const classNumber = Math.floor( percentage * (optCloudClassCount - 1) + 1 );

 generateTags()

  /* [NEW] create a new variable allTags with an empty object */
  let allTags = {};

  /* find all articles */
  const articles = document.querySelectorAll('.post')

  /* START LOOP: for every article: */
  for (let article of articles){

    /* find tags wrapper */
const tagsWrapperList = article.querySelector('.post-tags .list');

    /* make html variable with empty string */
    let html = '';

    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');

    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');

    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){

      /* generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
      console.log(linkHTML);

      /* add generated code to html variable */
      html = html + linkHTML;

      /* [NEW] check if this link is NOT already in allTags */
      if(!allTags[tag]) {
        /* [NEW] add generated code to allTags array */
        allTags[tag] = 1;
      }else{
        allTags[tag]++;
      }

    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */
  }
  generateAuthors 
 /* [NEW] create variable for all links HTML code */
 const authorsParams = calculateAuthorsParams(allAuthors);
console.log('authorParams:', authorsParams)
let allTagsHTML = '';

/* [NEW] START LOOP: for each tag in allAuthors: */
for(let author in allAuthors){
  /* [NEW] generate code of a link and add it to allAuthorsHTML */
  const authorLinkHTML = '<li>' + calculateAuthorsClass(allAuthors[author], authorParam) + '</li>';
console.log('authorLinkHTML:', authorLinkHTML);
  allAuthorsHTML += authorLinkHTML;
/* [NEW] END LOOP: for each tag in allAuthors: */
}
/*[NEW] add HTML from allAuthorsHTML to authorList */
authorList.innerHTML = allAuthorsHTML;

