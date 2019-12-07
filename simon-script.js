const colors = ['green', 'red', '#dbdb04', 'blue']
const colorSelected = ['#8dfc81', '#ff8585', '#ffffa1', '#8381fc']

const button = document.querySelectorAll('.button')
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', evt => {
        isClicked(evt, i)
    })
    button[i].style.backgroundColor = colors[i]
}

let playerTurn = false
let playerScore = 0
let sequence = []
let sequenceIndex = 0
let playerIndex = 0
let pause = 500
startSequence()

function startSequence () {
    setTimeout(addSequence, 1000)
}

function addSequence () {
    sequence.push(Math.ceil(Math.random() * 4) - 1)
    setTimeout(showSequence, 50)
}

function showSequence () {
    if (sequenceIndex < sequence.length) {
        button[sequence[sequenceIndex]].style.backgroundColor = colorSelected[sequence[sequenceIndex]]
        sequenceIndex++
        setTimeout(changeDefault, pause)
        setTimeout(showSequence, pause * 2)
    } else {
        playerTurn = true
        sequenceIndex = 0
    }
}

function isClicked (evt, i) {
    if (playerTurn) {
        if (i == sequence[playerIndex]) {
            evt.target.style.backgroundColor = colorSelected[i]
            setTimeout(changeDefault, 300)
            playerIndex++
            if (playerIndex == sequence.length) {
                playerTurn = false
                playerIndex = 0
                playerScore++
                startSequence()
            }
        } else {
            alert('oops')
        }
    }
}

function changeDefault() {
    for (let j = 0; j < button.length; j++) {
        button[j].style.backgroundColor = colors[j]
    }
}