 import './css/style.scss'

 //Tabs

 const tabHeader1 = document.querySelector('.tab-header-1'),
    tabBody1 = document.querySelector('.tab-body-1'),
    tabHeader2 = document.querySelector('.tab-header-2'),
    tabBody2 = document.querySelector('.tab-body-2'),
    tabHeader3 = document.querySelector('.tab-header-3'),
    tabBody3 = document.querySelector('.tab-body-3'),
    greenLine = document.querySelector('.line-green');

const openTab1 = () => {
    {
        tabBody1.style.display = 'block';
        tabBody2.style.display = 'none';
        tabBody3.style.display = 'none';
        greenLine.style.cssText = 'left: 0%; width: 30%';
    }
};

const openTab2 = () => {
    tabBody1.style.display = 'none';
    tabBody2.style.display = 'block';
    tabBody3.style.display = 'none';
    greenLine.style.cssText = 'left: 27%; width: 34%';
};

const openTab3 = () => {
    tabBody1.style.display = 'none';
    tabBody2.style.display = 'none';
    tabBody3.style.display = 'block';
    greenLine.style.cssText = 'left: 66%; width: 34%';
};


tabHeader1.addEventListener('click', openTab1);
tabHeader2.addEventListener('click', openTab2);
tabHeader3.addEventListener('click', openTab3);

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