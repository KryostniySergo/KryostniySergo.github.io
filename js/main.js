
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const target = document.querySelector("#num_of_product");
const num_of_product_modal = document.querySelector("#num_of_product_modal");

minus.addEventListener('click', () => {target.value = parseInt(target.value) - 2000});
plus.addEventListener('click', () => {target.value = parseInt(target.value) + 2000});

function setNumOfProduct(){
    num_of_product_modal.innerHTML = "Количество товара: " + parseInt(target.value) + " шт";
}