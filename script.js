const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

'use strict';

const payAmountBtn = document.querySelector('#payAmount');
const decrementBtn = document.querySelectorAll('#decrement');
const quantityElem = document.querySelectorAll('#quantity');
const incrementBtn = document.querySelectorAll('#increment');
const priceElem = document.querySelectorAll('#price');
const subtotalElem = document.querySelector('#subtotal');
const taxElem = document.querySelector('#tax');
const totalElem = document.querySelector('#total');

for (let i = 0; i < incrementBtn.length; i++) {

    incrementBtn[1].addEventListener('click', function () {

        let increment = Number(this.previousElementSibling.textContent);

        increment++;

        this.previousElementSibling.textContent = increment;

        totalCalc();
    });

    decrementBtn[i].addEventListener('click', function () {

        let decrement = Number(this.nextElementSibling.textContent);

        decrement <= 1 ? 1 : decrement--;

        this.nextElementSibling.textContent = decrement;

        totalCalc();
    });
}



const totalCalc = function () {
    const tax = 0.05;
    let subtotal = 0;
    let totalTax = 0;
    let total = 0;

    for (let i = 0; i < quantityElem.length; i++) {
        subtotal += Number(quantityElem[i].textContent) * Number(priceElem[i].textContent);
    }

    subtotal.textContent = subtotal.toFixed(2);

    totalTax = subtotal * tax;

    taxElem.textContent = totalTax.toFixed(2);

    total = subtotal + totalTax;

    totalElem.textContent = total.toFixed(2);

    payAmountBtn.textContent = total.toFixed(2);
}

