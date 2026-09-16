const number = document.querySelector('.number')
const generateButton = document.querySelector('.generate-btn')

generateButton.addEventListener('click', function(){
    const randomNumber = Math.floor(Math.random() * 100) + 1
    number.textContent = randomNumber

    
})