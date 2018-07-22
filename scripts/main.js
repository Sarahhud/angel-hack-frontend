const allAcceptButtons = document.querySelectorAll('.buttons-acc')
const allDeclineButtons = document.querySelectorAll('.buttons-decline')

const acceptBtns = Array.from(allAcceptButtons)
const declineBtns = Array.from(allDeclineButtons)

acceptBtns.map(el => {
    el.addEventListener('click', function () {
        console.log('Hello')
    })
})

declineBtns.map(el => {
    el.addEventListener('click', function () {
        console.log('Hello')
    })
})
