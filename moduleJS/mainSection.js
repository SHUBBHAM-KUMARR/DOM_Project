import {tags,attributes, colorGen} from './utils.js'
import {mainDiv} from './index.js'
const mainSectionDiv = tags('div')
attributes(mainSectionDiv,{
 id:"mainSectionDiv"                //this is our new function that creates attributes for more check doumetation.txt
})
mainDiv.append(mainSectionDiv)
setInterval(()=>{
  mainSectionDiv.style.background = colorGen()},1000)

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
    setInterval(()=>{
        cards.forEach((card)=>{
          let color0 = colorGen()
          let color1 = colorGen()
          card.style.background =`linear-gradient(to left ,   ${color0} ,${color1}`
         
        })
      },1000)

      //sponsors , testimonial etc ....will be created soon.........

      // const sponsrDiv = tags('div') 
      // attributes(sponsrDiv,{id:"sponsrContainer"})
      // mainDiv.append(sponsrDiv)

      // const contrSponsorDiv =('div',2)
      

