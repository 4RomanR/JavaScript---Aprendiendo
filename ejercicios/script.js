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

// TARJETA DE PRODUCTOS
/*
<div class="product-cards">
    <img class="product-card-img" src="https://cdn.pixabay.com/photo/2013/07/12/14/44/watch-148700_960_720.png" alt="">            
    <div class="product-details">
        <div>
            <p>Bike</p>
            <p>Price</p>
        </div>
        <figure>
            <img src="https://cdn-icons-png.flaticon.com/512/6132/6132882.png" alt="">
        </figure>
    </div>   
</div>
*/
const cardContainer = document.querySelector('.product-cards-container');
const productList = [];
productList.push({
    name: 'Reloj',
    price:323,
    img:'https://cdn.pixabay.com/photo/2013/07/12/14/44/watch-148700_960_720.png',
});
productList.push({
    name: 'Reloj',
    price:344,
    img:'https://cdn.pixabay.com/photo/2013/07/12/14/44/watch-148700_960_720.png',
});
productList.push({
    name: 'Reloj',
    price:384,
    img:'https://cdn.pixabay.com/photo/2013/07/12/14/44/watch-148700_960_720.png',
});


function renderProducts (arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-cards');
    
        const imgProduct = document.createElement('img');
        imgProduct.classList.add('product-card-img');
        imgProduct.setAttribute('src', product.img);
        imgProduct.addEventListener('click', openProductCardsDetails);
    
        const productDetails = document.createElement('div');
        productDetails.classList.add('product-details');
    
            const productInfoDiv = document.createElement('div');
    
                const productName = document.createElement('p');
                productName.innerText = product.name;
                const productPrice = document.createElement('p');
                productPrice.innerText = product.price;
        
                productInfoDiv.appendChild(productName);
                productInfoDiv.appendChild(productPrice);
    
                const productFigure = document.createElement('figure');
                const productImgCart = document.createElement('img');
    
                productImgCart.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/6132/6132882.png');
                productFigure.appendChild(productImgCart);
                
            productDetails.appendChild(productInfoDiv);
            productDetails.appendChild(productFigure);
            productCard.appendChild(imgProduct);
            productCard.appendChild(productDetails);
    
        cardContainer.appendChild(productCard);
    };
};
renderProducts(productList);

const ProductCardsDetails = document.querySelector('.product-cards-details');
const closeProductCardsDetails = document.querySelector('.product-cards-details-close');

function openProductCardsDetails(){
    ProductCardsDetails.classList.remove('inactive');
    categoryBurgerMenu.classList.add('inactive');
    carProductsAside.classList.add('inactive'); 
}
closeProductCardsDetails.addEventListener('click', closeProductCDetails)
function closeProductCDetails(){
    ProductCardsDetails.classList.add('inactive');
}
