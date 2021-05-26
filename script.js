var catalog = [
    XL1200C = {nam: 'XL1200C', price: 5500}, 
    seat = {nam: 'seat', price: 500}, 
    exhaust = {nam: 'exhaust', price: 300}
];
var korzina = [];

//вывод каталога
function showCatalog() {
    var catalogHTML = document.getElementById('catalog');
    for (i = 0; i < catalog.length; i++) {
        var product = catalogHTML.appendChild(document.createElement('p'));
        product.innerHTML = catalog[i].nam + ' цена: ' + catalog[i].price;
        var button = catalogHTML.appendChild(document.createElement('button'));
        button.innerHTML = 'Купить ' + catalog[i].nam;
        button.onclick = buttonClick;
        button.id = i;
    }
    var br = catalogHTML.appendChild(document.createElement('br'));
    var button = catalogHTML.appendChild(document.createElement('button'));
    button.innerHTML = 'Очистить корзину';
    button.onclick = buttonClick;
    button.id = 'delBasket';

    var korzinka = document.getElementById('korzinka');
    BasketPrice = korzinka.appendChild(document.createElement('p'));
}

//функция нажатия кнопки
function buttonClick() {
    if (this.id == 'delBasket') {
        korzina = [];
        BasketPrice.innerHTML = '';
    }
    else {
        korzina.push(this.id);
        BasketPrice.innerHTML = 'За товар: ' + countBasketName() + 'к оплате: ' + countBasketPrice() + '$';
    }    
    //для отладки
    // console.log(korzina);
    // console.log(this.id);
    // console.log('К оплате: ' + countBasketPrice() + '$');
}

//подсчет суммы корзины
function countBasketPrice() {
    var summa = 0;
    for (var i=0; i<korzina.length; i++) {
        summa += catalog[korzina[i]].price;
    }
    return summa;
}

//наименования товара в корзине
function countBasketName() {
    var BasketName = '';
    for (var i=0; i<korzina.length; i++) {
        BasketName += catalog[korzina[i]].nam + ', ';
    }
    return BasketName;
}

showCatalog()