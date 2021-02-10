//Counter

const btns = document.querySelectorAll('.buy-button'),
    mainCount = document.querySelector('.icon-busket p');

function addToBusket(event) {
    let count = +mainCount.textContent;
    mainCount.className = 'normal';
    count += 1;
    if (count < 9) {
        mainCount.textContent = count;
        if (count === 1) {
            mainCount.className = 'one';
        }
    } else {
        mainCount.textContent = '9+';
        mainCount.className = 'plus';
    }
    event.target.removeEventListener('click', addToBusket);
}

btns.forEach(item => {
     item.addEventListener('click', addToBusket);
})
