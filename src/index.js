import './css/style.scss'

 //Tabs

 //Tabs

 const tabMainHeader = document.querySelector('.tab-all-headers'),
    tabHeaders = document.querySelectorAll('.tab-header'),
    tabBodies = document.querySelectorAll('.tab-body'),
    greenLine = document.querySelector('.line-green');;

function openTab(index) {
    greenLine.className = 'line-green';
    greenLine.classList.add('tab-' + (index + 1));
    tabBodies.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    })
}

tabMainHeader.addEventListener('click', event => {
    tabHeaders.forEach((item, i) => {
        if (event.target === item || event.target.parentElement === item) {
            openTab(i);
        }
    })
});

//Counter

const btn = document.querySelector('.buy-button'),
    mainCount = document.querySelector('.icon-busket p');

function addToBusket() {
    let count = +mainCount.textContent;
    count += 1;
    if (count >= 0 && count < 9) {
        mainCount.textContent = count;
        if (count === 1) {
            mainCount.classList.add('one');
        } else {
            mainCount.classList.remove('one');
        }
    } else {
        mainCount.textContent = '9+';
        mainCount.classList.add('more-than-nine');
    }
    btn.removeEventListener('click', addToBusket);
}

btn.addEventListener('click', addToBusket);

// btns.forEach(item => {
//     item.addEventListener('click', addToBusket);
// })