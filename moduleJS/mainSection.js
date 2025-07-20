import {tags,attributes, colorGen} from './utils.js'
import {mainDiv} from './index.js'
const mainSectionDiv = tags('div')
mainDiv.append(mainSectionDiv)
attributes(mainSectionDiv,{
 id:"mainSectionDiv" 
})
setInterval(()=>{
  mainSectionDiv.style.background = colorGen()},1000)

  