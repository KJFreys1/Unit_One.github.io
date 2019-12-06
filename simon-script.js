const button = document.querySelectorAll('.button')
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', e => {
        isClicked(e, i)
    })
}

const colors = ['green', 'red', '#f4f700', 'blue']
const colorSelected = ['#8dfc81', '#ff8585', '#feffbd', '#8381fc']

function isClicked (e, i) {
    e.target.style.backgroundColor = colorSelected[i]
    setTimeout(changeDefault, 300)
}

function changeDefault() {
    for (let i = 0; i < button.length; i++) {
        button[i].style.backgroundColor = colors[i]
    }
}