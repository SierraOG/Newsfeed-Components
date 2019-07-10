/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a function that will create a menu component as seen below:
  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
  Pass the function an array as it's only argument.
  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>
  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself
  Step 5: return the menu component.
  Step 6: add the menu component to the DOM.
  
*/
// select header because menu will be appended to header
const header = document.querySelector('.header');

// creates menu component using menuItems array and appends this after the header
header.append(createMenu(menuItems));

function createMenu(menuArray){
  // define new elements
  const menu = document.createElement('div')
  const menuUL = document.createElement('ul');
  const menuLIs = [];

  // loops through array of menu items, creating a new list item for each one and appending that list item as a child to the unordered list element defined above
  menuArray.forEach(function(item, i) {
    menuLIs[i] = document.createElement('li');
    menuLIs[i].textContent = item;
    menuUL.appendChild(menuLIs[i]);
  })

  // appends unordered list with list items to the menu component
  menu.appendChild(menuUL);

  // add menu class to menu component
  menu.classList.add('menu');

  // selects menu button on DOM
  const menuButton = document.querySelector('.menu-button');

  // add click event to menu button to open and close the menu
  menuButton.addEventListener('click', event => {
    menu.classList.toggle('menu--open');
  })

  // reurns menu component
  return menu;
}