'use strict';

let button = document.querySelector('#btn');
let nameGood = document.querySelector('#nameGoods');
let dataInp = document.querySelector('#date');

button.addEventListener('click', () => {
	console.log(nameGood.value);
	console.log(dataInp.value)
	dataInp.value = ''
})


console.log(button)

