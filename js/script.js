
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
