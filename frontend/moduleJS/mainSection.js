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
   cards[2].innerHTML="<img class='cardImg' src='./frontend/media/mainPage/coffee.jpg'>"
   cards[3].innerHTML="<img class='cardImg' src='./frontend/media/mainPage/snacks.jpg'>"
   cards[4].innerHTML="<img class='cardImg' src='./frontend/media/mainPage/bunNew.jpg'>"
   cards[5].innerHTML="<img class='cardImg' src='./frontend/media/mainPage/spices.jpg'>"
      
   cards[6].innerHTML="<img class='cardImg' src='./frontend/media/mainPage/veggies.jpg'>"
      
      

const footer = tags('footer')
attributes(footer,{
  id:"footer"
})
mainDiv.append(footer)
const contact = tags('div')
attributes(contact,{
  id:"contact"
})
footer.append(contact)
contact.innerHTML =`  <footer id='mainFooter'>
    <div class='footer-container'>

      <!-- Site Map Section -->
      <div class='footer-section' id='siteMap'>
        <h4>Site Map</h4>
        <ul>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Privacy Policy</a></li>
          <li><a href='#'>Customer Service</a></li>
        </ul>
      </div>

      <!-- Contact Form Section -->
      <div class='footer-section' id='contactSection'>
        <h4>Contact Us</h4>
        <form id='contactForm'>
          <input type='text' id='name' placeholder='Your Name'><br>
          <input type='email' id='email' placeholder='Your Email'><br>
          <textarea id='message' placeholder='Your Message'></textarea><br>
          <button type='submit' id='submitBtn'>Send</button>
        </form>
      </div>

    </div>

    <p id='footerBottom'>© 2025 My Website. All rights reserved.</p>
  </footer>
`