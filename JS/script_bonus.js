/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

function bonusOne(){

     const divHost = document.querySelector('body')

     // Loop para realizar as repetições.
     for(let i = 0; i < 20; i++){
          const rectangle = document.createElement('div')
          rectangle.style.height = '20px'
          rectangle.style.width = '100px'
          rectangle.style.backgroundColor = '#808080'
          rectangle.style.borderRadius = '5px'
          rectangle.style.marginBottom = '5px'

          divHost.appendChild(rectangle)
     }
}

bonusOne()

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

function bonusTwo(){

     const divHost = document.querySelector('body')

     // Loop para realizar as repetições.
     let minWidth = 105
     for(let i = 0; i < 20; i++){
          const rectangle = document.createElement('div')
          rectangle.style.height = '20px'

          rectangle.style.width = minWidth + 'px'
          minWidth += 5

          rectangle.style.backgroundColor = '#808080'
          rectangle.style.borderRadius = '5px'
          rectangle.style.marginBottom = '5px'

          divHost.appendChild(rectangle)
     }
}

bonusTwo()

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

function bonusThree(){

     const divHost = document.querySelector('body')

     // Loop para realizar as repetições.
     for(let i = 0; i < sampleArray.length; i++){
          const rectangle = document.createElement('div')
          rectangle.style.height = '20px'
          rectangle.style.width = sampleArray[i] + 'px'
          rectangle.style.backgroundColor = '#808080'
          rectangle.style.borderRadius = '5px'
          rectangle.style.marginBottom = '5px'

          divHost.appendChild(rectangle)
     }
}

bonusThree()

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

function bonusFour(){

     const divHost = document.querySelector('body')

     // Loop para realizar as repetições.
     for(let i = 0; i < 20; i++){
          const rectangle = document.createElement('div')
          rectangle.style.height = '20px'
          rectangle.style.width = '100px'
          rectangle.style.borderRadius = '5px'
          rectangle.style.marginBottom = '5px'

          if (i % 2 === 0){
               rectangle.style.backgroundColor = '#ff0000'
          } else {
               rectangle.style.backgroundColor = '#808080'
          }

          divHost.appendChild(rectangle)
     }
}

bonusFour()

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

function bonusFive(){

     const divHost = document.querySelector('body')

     // Loop para realizar as repetições.
     for(let i = 0; i < sampleArray.length; i++){
          const rectangle = document.createElement('div')
          rectangle.style.height = '20px'
          rectangle.style.width = sampleArray[i] + 'px'
          rectangle.style.borderRadius = '5px'
          rectangle.style.marginBottom = '5px'

          if (sampleArray[i] % 2 === 0){
               rectangle.style.backgroundColor = '#ff0000'
          } else {
               rectangle.style.backgroundColor = '#808080'
          }

          divHost.appendChild(rectangle)
     }
}

bonusFive()