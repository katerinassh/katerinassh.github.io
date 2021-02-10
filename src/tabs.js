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
