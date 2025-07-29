
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
  src: './frontend/media/searchblack.png'
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


