import {tags }from './utils.js'


// it is a practise 

 export const mainDiv = tags('div')

mainDiv.setAttribute("id", "mainContainer");
document.body.appendChild(mainDiv);


 let header =tags('div');
mainDiv.append(header);
header.setAttribute("id", "header")

let cNameDiv = tags('div')
header.append(cNameDiv)
cNameDiv.setAttribute("id","cNameDiv")

let cName = tags('h1')
cNameDiv.append(cName)
cName.innerText = "DOMproject"


let searchDiv = tags('div')
searchDiv.setAttribute('id','searchDiv')
header.append(searchDiv)

let searchInput = tags('input')
searchInput.setAttribute('type','search')
searchInput.setAttribute('id','searchInput')
searchInput.setAttribute('placeholder','searchInput')
searchDiv.append(searchInput)

let searchIconDiv = tags('div')
searchIconDiv.setAttribute('id','srchIconDiv')
searchDiv.append(searchIconDiv)

let searchIcon = tags('img');
searchIcon.setAttribute('id','searchIcon')
searchIcon.setAttribute('src','./media/searchblack.png')
searchIconDiv.append(searchIcon)

let nav = tags('nav')
header.append(nav)
nav.setAttribute('id','nav')

let ul = tags('ul')
nav.append(ul)
ul.setAttribute('id','nav_ul');

const siteLinks = tags('li', 4);
const linkTexts = ['dummy', 'dummy', 'dummy ','dummy'];

siteLinks.forEach((li,i) => {
  li.textContent = linkTexts[i];
  ul.appendChild(li);
  li.setAttribute('class','sites')
});