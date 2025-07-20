




export let tags = (tag, num = 1) => {
  const htmlTags = [
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'p', 'span', 'strong', 'em', 'br', 'blockquote', 'pre',
    'div', 'header', 'footer', 'main', 'section', 'article', 'aside', 'nav',
    'ul', 'ol', 'li', 'dl', 'dt', 'dd',
    'table', 'thead', 'tbody', 'tfoot', 'tr', 'td', 'th', 'caption', 'colgroup', 'col',
    'form', 'input', 'textarea', 'button', 'select', 'option', 'label', 'fieldset', 'legend',
    'img', 'audio', 'video', 'source', 'track', 'canvas', 'svg', 'iframe',
    'a', 'link', 'meta', 'title', 'style', 'script', 'base',
    'details', 'summary', 'dialog', 'menu', 'menuitem',
    'figure', 'figcaption', 'mark', 'time', 'code', 'kbd', 'samp', 'var', 'abbr', 'cite', 'dfn'
  ];

  if (!htmlTags.includes(tag)) {
    throw new Error("Invalid HTML tag");
  }

  if (num === 1) {
    return document.createElement(tag);
  } else {
    return Array.from({ length: num }, () => document.createElement(tag));
  }
};


export function attributes(elements, attributes) {
  for (let key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      elements.setAttribute(key, attributes[key]);
    }
  }
}

export function colorGen() {
  const range = '0123456789ABCDEF'
  let color = '#'
  
  for(let i = 0;i<6;i++){
   
     color +=range[Math.floor(Math.random()*16)]
}


return color
}
console.log(colorGen);




