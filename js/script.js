'use strict'
// question
// рабочий вариант
let questionButtons = document.querySelectorAll('.btn_wrapper')
questionButtons.forEach( element => {
    element.addEventListener('click', (event) => {
        console.log(typeof event.currentTarget);
        let text = event.currentTarget.querySelector('.question_text')
        text.classList.toggle("question_text__block")
    })
})

