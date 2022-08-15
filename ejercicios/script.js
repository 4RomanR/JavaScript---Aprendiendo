const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const img = document.querySelector('img');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalculo');
const presultado = document.querySelector ('#resultado1');


// MENU DEL CARRITO FIJO
const carProductsFixed = document.querySelector('.car-products-fixed');
const carProductsAside = document.querySelector('.car-menu');

carProductsFixed.addEventListener('click', toggleOpenMenuCar);

function toggleOpenMenuCar(){
    carProductsAside.classList.toggle('inactive');
    categoryBurgerMenu.classList.add('inactive');
};
// MENU DE LA HAMBURGUESA FIJA
const burgerFixedIcon = document.querySelector('.menu-burger');
const categoryBurgerMenu = document.querySelector('.menu-burger-category');

burgerFixedIcon.addEventListener('click', toggleOpenMenuBurger);

function toggleOpenMenuBurger(){
    categoryBurgerMenu.classList.toggle('inactive');
    carProductsAside.classList.add('inactive');  
};



btn.addEventListener('dblclick', clicOnBtn);

function clicOnBtn(){
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    presultado.innerText = sumaInputs;
    
};

const inputEnt1 = document.querySelector('#entrada1');
const inputEnt2 = document.querySelector('#entrada2');
const presultado2 = document.querySelector('#resultado2')
const form = document.querySelector('#form')

form.addEventListener('dblclick', resultadu);

function resultadu(event) {
    event.preventDefault({event});
    const resultado = inputEnt1.value + inputEnt2.value;
    presultado2.innerText = 'El resultado es :' + resultado;

};