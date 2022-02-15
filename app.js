// counting phone quantity and case quantity
function updatePrice(product, price, isIncreasing){
    const productInput = document.getElementById(product+'-count');
    const productNumber = productInput.value;
    if (isIncreasing) {
        productInput.value =  Number(productNumber) +1;
    }
    else if(productInput.value > 0 ){
        productInput.value =  Number(productNumber) -1;
    }

    // update price
    const productPrice = document.getElementById(product+'-price');
    productPrice.innerText = price * Number(productInput.value);

    // calculate total
    calculateTotal();
};

// phone
document.getElementById('phone-plus').addEventListener('click', function(){
    updatePrice('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updatePrice('phone', 1219, false);
});

// case
document.getElementById('case-plus').addEventListener('click', function(){
    updatePrice('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function(){
    updatePrice('case',59, false);
});


// total price 
function calculateTotal(){
    const phoneCount = parseInt(document.getElementById('phone-count').value);
    const caseCount = parseInt(document.getElementById('case-count').value);

    const phoneTotal = phoneCount * 1219;
    const caseTotal = caseCount * 59;

    const subTotal = phoneTotal + caseTotal;
    console.log(subTotal);

    const tax = subTotal / 10;  // 10%
    const total = subTotal + tax; 

    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
};