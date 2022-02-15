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