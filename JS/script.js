// // Array Informado na Lição
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function addedElement(value) {
    // Variables
    let divHost = document.querySelector('body')

    let newLine = document.createElement('span');
    let breakLine = document.createElement('br');
    let valueInput = document.createTextNode(value);
 
    // Added Elements
    newLine.appendChild(valueInput)
    divHost.appendChild(newLine)
    divHost.appendChild(breakLine)
}

///////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////

function showKata_1() {
     
    let newArray = []
    for(let i = 1; i <= 25; i++){
        newArray.push(i) 
    }
     
    // Added Elements
    addedElement('Kata_1 | Numbers from 1 to 25')
    addedElement(newArray)
    addedElement('')
    return newArray;

}
 
showKata_1();

///////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////

function showKata_2() {
     
    let newArray = []
    for(let i = 25; i >= 1; i--){
        newArray.push(i)
    }
     
    // Added Elements
    addedElement('Kata_2 | Numbers from 1 to 25 - Reverse Order')
    addedElement(newArray)
    addedElement('')
    return newArray;

}
 
showKata_2();

///////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////

function showKata_3() {

    let newArray = []
    for(let i = -1; i >= -25; i--){
        newArray.push(i)
    }
     
    // Added Elements
    addedElement('Kata_3 | Negative Numbers from -1 to -25')
    addedElement(newArray)
    addedElement('')
    return newArray;

}
 
showKata_3();

///////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////

function showKata_4() {

    let newArray = []
    for(let i = -25; i <= -1; i++){
        newArray.push(i)
    }
     
    // Added Elements
    addedElement('Kata_4 | Negative Numbers from -25 to -1')
    addedElement(newArray)
    addedElement('')
    return newArray;    

}
 
showKata_4();

///////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////

function showKata_5() {

    let newArray = []
    for(let i = 25; i >= -25; i--){
        if(i % 2 !== 0){
            newArray.push(i)
        }
    }
    // Added Elements
    addedElement('Kata_5 | Odd Numbers from 25 to -25')
    addedElement(newArray)
    addedElement('')
    return newArray;   
      
}
 
showKata_5();

///////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////

function showKata_6() {
     
    let newArray = []
    for(let i = 3; i <= 100; i++){
        if(i % 3 === 0){
            newArray.push(i)
        } 
    }
     
    // Added Elements
    addedElement('Kata_6 | Numbers divided by 3 from 0 to 100')
    addedElement(newArray)
    addedElement('')
    return newArray;

}
 
showKata_6();

///////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////

function showKata_7() {
     
    let newArray = []
    for(let i = 7; i <= 100; i++){
        if(i % 7 === 0){
            newArray.push(i)
        } 
    }
     
    // Added Elements
    addedElement('Kata_7 | Numbers divided by 7 from 0 to 100')
    addedElement(newArray)
    addedElement('')
    return newArray;

}
 
showKata_7();

///////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////
function showKata_8() {
    
    let newArray = []
    for(let i = 100; i >= 3; i--){
        if(i % 3 === 0 || i % 7 === 0){
            newArray.push(i)
        } 
    }
    
    // Added Elements
    addedElement('Kata_8 | Numbers divided by 3 and 7 - Reverse Order')
    addedElement(newArray)
    addedElement('')
    return newArray;

}
 
showKata_8();

///////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////

function showKata_9() {

    let newArray = []
    for(let i = 5; i <= 100; i++){
        if(i % 5 === 0 && i % 2 !== 0){
            newArray.push(i)
        } 
    }
     
    // Added Elements
    addedElement('Kata_9 | Odd Numbers and divided by 5 from 0 to 100')
    addedElement(newArray)
    addedElement('')
    return newArray;    

}
 
showKata_9();

///////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////

function showKata_10() {

    // Added Elements
    addedElement('Kata_10 | Show SAMPLE ARRAY Elements')
    addedElement(sampleArray)
    addedElement('')
    return sampleArray;     

}
 
showKata_10();

///////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////

function showKata_11() {

    let newArray = []
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 === 0){
            newArray.push(sampleArray[i])
        } 
    }

    // Added Elements
    addedElement('Kata_11 | Even Numbers - SampleArray')
    addedElement(newArray)
    addedElement('')
    return newArray;     

}
 
showKata_11();

///////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////

function showKata_12() {

    let newArray = []
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 !== 0){
            newArray.push(sampleArray[i])
        } 
    }

    // Added Elements
    addedElement('Kata_12 | Odd Numbers - Sample Array')
    addedElement(newArray)
    addedElement('')
    return newArray;     

}
 
showKata_12();

///////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////

function showKata_13() {

    let newArray = []
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 8 === 0){
            newArray.push(sampleArray[i])
        } 
    }

    // Added Elements
    addedElement('Kata_13 | Numbers divided by 8')
    addedElement(newArray)
    addedElement('')
    return newArray;   

}
 
showKata_13();

///////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////

function showKata_14() {

    let newArray = []
    let squareNumber = 1

    for(let number = 0; number < sampleArray.length; number++){
        squareNumber = (sampleArray[number] * sampleArray[number])
        newArray.push(squareNumber)
    }

    // Added Elements
    addedElement('Kata_14 | SquareNumbers')
    addedElement(newArray)
    addedElement('')
    return newArray;     

}
 
showKata_14();

///////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////

function showKata_15() {

    let sum = 0
    for(let i = 0; i <= 20; i++){
        sum += i
    }

    // Added Elements
    addedElement('Kata_15 | Sum from 1 to 20')
    addedElement(sum)
    addedElement('')
    return sum;     

}
 
showKata_15();

///////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////

function showKata_16() {

    let sum = 0
    for(let i = 0; i < sampleArray.length; i++){
        sum += sampleArray[i]
    }

    // Added Elements
    addedElement('Kata_16 | Sum SampleArray')
    addedElement(sum)
    addedElement('')
    return sum;     

}
 
showKata_16();

///////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////

function showKata_17() {

    let lowestNumber = sampleArray[0]
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] < lowestNumber){
            lowestNumber = sampleArray[i]
        }
    }
    
    // Added Elements
    addedElement('Kata_17 | Lowest Number - SampleArray')
    addedElement(lowestNumber)
    addedElement('')
    return lowestNumber;     

}
 
showKata_17();

///////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////

function showKata_18() {

    let highestNumber = sampleArray[0]
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] > highestNumber){
            highestNumber = sampleArray[i]
        }
    }

    // Added Elements
    addedElement('Kata_18 | Highest Number - SampleArray')
    addedElement(highestNumber)
    addedElement('')
    return highestNumber;     

}
 
showKata_18();