// import {tags }from './utils.js'


// // it is a practise file , here is the code of header and the main div

//  export const mainDiv = tags('div')

// mainDiv.setAttribute("id", "mainContainer");
// document.body.appendChild(mainDiv);


//  let header =tags('div');
// mainDiv.append(header);
// header.setAttribute("id", "header")

// let cNameDiv = tags('div')
// header.append(cNameDiv)
// cNameDiv.setAttribute("id","cNameDiv")

// let cName = tags('h1')
// cNameDiv.append(cName)
// cName.innerText = "DOMproject"


// let searchDiv = tags('div')
// searchDiv.setAttribute('id','searchDiv')
// header.append(searchDiv)

// let searchInput = tags('input')
// searchInput.setAttribute('type','search')
// searchInput.setAttribute('id','searchInput')
// searchInput.setAttribute('placeholder','searchInput')
// searchDiv.append(searchInput)

// let searchIconDiv = tags('div')
// searchIconDiv.setAttribute('id','srchIconDiv')
// searchDiv.append(searchIconDiv)

// let searchIcon = tags('img');
// searchIcon.setAttribute('id','searchIcon')
// searchIcon.setAttribute('src','./media/searchblack.png')
// searchIconDiv.append(searchIcon)

// let nav = tags('nav')
// header.append(nav)
// nav.setAttribute('id','nav')

// let ul = tags('ul')
// nav.append(ul)
// ul.setAttribute('id','nav_ul');

// const siteLinks = tags('li', 4);
// const linkTexts = ['dummy', 'dummy', 'dummy ','dummy'];

// siteLinks.forEach((li,i) => {
//   li.textContent = linkTexts[i];
//   ul.appendChild(li);
//   li.setAttribute('class','sites')
// });

// these are codes after i made a new function that creates attributes 



import { tags, attributes } from './utils.js';


// Main container
export const mainDiv = tags('div');
attributes(mainDiv, {
  id: "mainContainer"
});
document.body.appendChild(mainDiv);

// Header
export let header = tags('div');
attributes(header, {
  id: "header"
});
mainDiv.append(header);

// Company Name Section
let cNameDiv = tags('div');
attributes(cNameDiv, {
  id: "cNameDiv"
});
header.append(cNameDiv);

let cName = tags('h1');
cName.innerText = "DOMproject";
cNameDiv.append(cName);

// Search Section
let searchDiv = tags('div');
attributes(searchDiv, {
  id: "searchDiv"
});
header.append(searchDiv);

let searchInput = tags('input');
attributes(searchInput, {
  type: 'search',
  id: 'searchInput',
  placeholder: 'searchInput'
});
searchDiv.append(searchInput);

let searchIconDiv = tags('div');
attributes(searchIconDiv, {
  id: 'srchIconDiv'
});
searchDiv.append(searchIconDiv);

let searchIcon = tags('img');
attributes(searchIcon, {
  id: 'searchIcon',
  src: './media/searchblack.png'
});
searchIconDiv.append(searchIcon);

// Navigation
let nav = tags('nav');
attributes(nav, {
  id: 'nav'
});
header.append(nav);

let ul = tags('ul');
attributes(ul, {
  id: 'nav_ul'
});
nav.append(ul);

const siteLinks = tags('li', 4);
const linkTexts = ['Home', 'Product', 'Cart  ', 'login'];

siteLinks.forEach((li, i) => {
  li.textContent = linkTexts[i];
  attributes(li, {
    class: 'sites'
  });
  ul.appendChild(li);
});


