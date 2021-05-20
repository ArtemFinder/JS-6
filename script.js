var catalog = [XL1200C = {nam: 'XL1200C', price: 5500}, seat = {nam: 'seat', price: 500}, exhaust = {nam: 'exhaust', price: 300}];
var korzina = [];

function countBasketPrice() {
    var summa = 0;
    for (var i=0; i<korzina.length; i++) {
        summa += catalog[korzina[i]].price;
    }
    return summa;
}




alert('К оплате: ' + countBasketPrice() + '$');
