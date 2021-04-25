// Functions calling functions
// Hey Kiddo

function checkAdult(age) {
    return age >= 18;
}

function greeting(age2) {
    if (checkAdult(age2)) {
        return "hello there";
    } else {
        return "hey kiddo";
    }
}


console.log(greeting(17));
console.log(greeting(18));
console.log(greeting(19));
console.log(greeting(0));

// with vars ------------------------------------
// now again using variables
console.log("with vars -------------------------");
function checkAdult2(age) {
    let test = (age >= 18);
    return test;
}

function greeting2(age2) {
    let grt_kid="hey kiddo";
    let grt_adlt="hello there";
    let test2 = checkAdult(age2);

    if (test2) {
        return grt_adlt;
    } else {
        return grt_kid;
    }
}
console.log(greeting2(17));
console.log(greeting2(18));
console.log(greeting2(19));
console.log(greeting2(0));


console.log("VAT 1 ====================");
// =========================================================
//Excercise VAT 1

function VAT (price2, percentage2) {
    return price2 * (percentage2/100); // nettoprijs * 21% == nettoprijs * 21/100 = 0.21 = 21% BTWbedrag
}
function totalPrice (price, percentage) {
    return price + VAT(price, percentage);  // nettoprijs*(1+0.21)
}
console.log(totalPrice(1000, 21)); // 1210
console.log(totalPrice(100, 6));  // 106
console.log(totalPrice(999, 0));  // 999

console.log("VAT 2 ====================");

function baseCalc (price2, percentage2) {
    return price2 / (1 + (percentage2/100)) ; // -21% == verkoopprijs/1.21  == verkoopprijs/(1 + 21/100) == nettoprijs
}
function splitPrice (price, percentage) {
    let basePrice = baseCalc(price, percentage);
    let vatAmount = price - basePrice;
    return [basePrice, vatAmount];
}
console.log(splitPrice(1210, 21)); // 1000
console.log(splitPrice(1000, 21)); // 826.45, 174.55
console.log(splitPrice(106, 6)); // 100
console.log(splitPrice(100, 6)); // 94.34, 5.66
console.log(splitPrice(999, 0)); // 999
