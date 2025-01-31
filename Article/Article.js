// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerHTML = "expand";
    // Close button
    this.closeButton = domElement.querySelector('.closeButton');
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
    this.closeButton.addEventListener('click', () => this.closeArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    // Toggles text on button to go from 'expand' to 'hide' using ternary operator
    (this.expandButton.innerHTML === 'expand') ? this.expandButton.innerHTML = 'hide' : this.expandButton.innerHTML = 'expand';
    // This is equivalent to:
    /* 
    if (this.expandButton.innerHTML === 'expand'){
    this.expandButton.innerHTML = 'hide';
    }
    else{
      this.expandButton.innerHTML = 'expand';
    } 
    */
  }
  closeArticle(){
    this.domElement.classList.toggle('article-close');
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');

articles.forEach(article => new Article(article));

TweenLite.from(articles, 0.4, {y: '+500px', ease:Power3.easeInOut, delay: 0});