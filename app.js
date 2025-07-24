// let price = document.getElementById("Price").value;
// let qty = document.getElementById("Qty").value;
// let amnt = price * qty;
// document.getElementById("Amnt").value = amnt;

// let price;
// let quantity;
// let amount;
// let prod_name;
// let ids;
// let tax = 50;

// function calculate() {
//     ids = document.getElementById("ids").value;
//     Price = document.getElementById("Price").value;
//     quantity = document.getElementById("Qty").value;
//     amount = Price * quantity;
// }

// function addData(){
//     prod_name = document.getElementById("Product").value;
//     document.getElementById("newtr").innerHTML += '<tr><td>' + ids + '</td><td>' + prod_name + '</td><td>' + Price + '</td><td>' + quantity + '</td><td>' + amount + '</td></tr>';
//     document.getElementById("ids").value = "";
//     document.getElementById("Product").value = "";
//     document.getElementById("price").value = "";
//     document.getElementById("Qty").value = "";
//     document.getElementById("Amnt").value = "";
//     document.getElementById("subtotal-amount").innerHTML =  price * quantity;
//      document.getElementById("total-amount").innerHTML = price *  quantity - tax;
//      document.getElementById("total").innerHTML = price *  quantity - tax;

// }

let price;
let quantity;
let amount;
let prod_name;
let ids;
let tax = 50;
let subtotal = 0;

function calculate() {
    ids = document.getElementById("ids").value;
    price = parseFloat(document.getElementById("Price").value) || 0;
    quantity = parseInt(document.getElementById("Qty").value) || 0;
    amount = price * quantity;

    // Show calculated amount in Amount field
    document.getElementById("Amnt").value = amount.toFixed(2);
}

function addData() {
 
    prod_name = document.getElementById("Product").value;
 ids = document.getElementById("ids").value;
    price = parseFloat(document.getElementById("Price").value) || 0;
    quantity = parseInt(document.getElementById("Qty").value) || 0;
    amount = price * quantity; 
    // Append new row
    document.getElementById("newtr").innerHTML +=
        `<tr><td>${ids}</td><td>${prod_name}</td><td>${price.toFixed(2)}</td><td>${quantity}</td><td>${amount.toFixed(2)}</td></tr>`;

    // Update subtotal and totals
    subtotal += amount;
 let mountrr =   document.getElementById("subtotal-amount").innerHTML = subtotal.toFixed(2);
    document.getElementById("total-amount").innerHTML = (subtotal + tax).toFixed(2);
     document.getElementById("total").innerHTML = (subtotal + tax).toFixed(2);

    // Clear form fields
    document.getElementById("ids").value = "";
    document.getElementById("Product").value = "";
    document.getElementById("Price").value = "";
    document.getElementById("Qty").value = "";
    document.getElementById("Amnt").value = "";
}
