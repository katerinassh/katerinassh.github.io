import './css/style.scss'

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

// Modal window
const triggerModal = document.querySelector('.icon-busket'),
    modal = document.querySelector('.modal'),
    cards = document.querySelector('.modal-cards');

function create() {
    const productItem = document.createElement('div');
    const line = document.createElement('hr');

    productItem.classList.add('modal-product');
    productItem.innerHTML = `
    <div class='col-1'>
    <img src="assets/images/product1-mini.png" alt="image of first chosen product">
    <div class="wishlist">
        <img src="assets/images/ic-actions-mini-heart.svg" alt="mini heart to add to wishlist">
        <p>Wishlist</p>
    </div>
    <div class="compare">
        <img src="assets/images/ic-mini-layout-picture-right.svg" alt="compare products">
        <p>Compare</p>
    </div>
    <div class="remove">
        <img src="assets/images/ic-mini-actions-close-simple.svg" alt="remove from busket">
        <p>Remove</p>
    </div>
</div>
<div class="col-2">
    <h3>Product title</h3>
    <div class="short-info">
        <div class="col-key">
            <p>Farm:</p>
            <p>Freshness:</p>
        </div>
        <div class="col-value">
            <p>Tharamis Farm</p>
            <p>1 day old</p>
        </div>
        </div>
        <div class='stars'>
        <img src="assets/images/ic-mini-black-star.svg" alt="star">
        <img src="assets/images/ic-mini-black-star.svg" alt="star">
        <img src="assets/images/ic-mini-black-star.svg" alt="star">
        <img src="assets/images/ic-mini-black-star.svg" alt="star">
        <img src="assets/images/ic-mini-star.svg" alt="star">
    </div>
    <div class="row-price-quality">
        <div class="price">
            <p class="new-price">36.23 USD</p>
            <p class="old-price">48.56 USD</p>
        </div>
        <form class="form-add-quantity">
            <input type="text" value="1 pcs" placeholder="1">
            <hr>
            <select>
                <option selected>Pcs</option>
                <option>Kgs</option>
                <option>Box</option>
                <option>Pack</option>
            </select>
        </form>
    </div>
    </div>`;

    cards.append(productItem);
    cards.append(line);
}

function openModal() {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'visible';
}

triggerModal.addEventListener('click', openModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
        closeModal();
    }
})

create();
create();
create();