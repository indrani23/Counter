let plusClicked = document.getElementById("add");
let minusClicked = document.getElementById("sub");
let reset = document.getElementById("reset");
let inputElement = document.getElementById("increment");
let incrementNumber = 1;

inputElement.addEventListener("change", function(e) {
    incrementNumber = parseInt(e.target.value);
});

plusClicked.addEventListener("click", function(e) {
    let curr = document.getElementById("number");
    let total = parseInt(curr.innerText) + incrementNumber;

    curr.innerText = total;
});

minusClicked.addEventListener("click", function(e) {
    let curr = document.getElementById("number");
    let total = parseInt(curr.innerText) - incrementNumber;
    
    if(total < 0) {
        total = 0;
    }
    curr.innerText = total;
});

reset.addEventListener("click", function(e) {
    let curr = document.getElementById("number");
    
    curr.innerText = 0;
});