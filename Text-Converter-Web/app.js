const userInput = document.querySelector('.input');
const upperBtn = document.querySelector('.upperBtn');
const lowerBtn = document.querySelector('.lowerBtn');
const convertedText = document.querySelector('.new-text');


alert('Reload the page to reset your conversions');

upperBtn.addEventListener('click', function(){
    const newLiUpper = document.createElement('LI')
    const InputNewLIUpper = document.createTextNode(userInput.value.toUpperCase())
    newLiUpper.appendChild(InputNewLIUpper)
    convertedText.appendChild(newLiUpper)

})


lowerBtn.addEventListener('click', function(){
    const newLiLower = document.createElement('LI')
    const InputNewLILower = document.createTextNode(userInput.value.toLowerCase())
    newLiLower.appendChild(InputNewLILower)
    convertedText.appendChild(newLiLower)


})