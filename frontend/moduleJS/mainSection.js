import {tags,attributes, colorGen} from './utils.js'
import {mainDiv} from './index.js'
const mainSectionDiv = tags('div')
attributes(mainSectionDiv,{
 id:"mainSectionDiv"                //this is our new function that creates attributes for more check doumetation.txt
})
mainDiv.append(mainSectionDiv)
 mainSectionDiv.innerHTML = "<img id='hero' src='./frontend/media/mainPage/hero.jpg'/>"

// product catalog
  //cards container
  const cardsContainerGrid = tags('div')
  attributes(cardsContainerGrid,{
    id:"cardsContainerGrid"
  })
  
  mainDiv.append(cardsContainerGrid)

  // cards
  const cards = tags('div',7)
    cards.forEach((cards)=>{
      attributes(cards,{
        class:"cards"
      })

      cardsContainerGrid.append(cards)

      
    });
   cards[0].innerHTML="<img class='cardImg' src='./frontend/media/mainPage/bun.jpg'>"
   cards[1].innerHTML="<img class='cardImg' src='./frontend/media/mainPage/bunNew.jpg'>"
      
      

