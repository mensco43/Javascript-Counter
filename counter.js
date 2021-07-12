let increment = document.querySelector ( "#increment")
let decrement = document.querySelector( "#decrement")
let counterValue = document.querySelector( "#counterValue")

let counter = 7;

increment.addEventlistener("click" , ()=>{
    counter++;
    counterValue.innerText = counter
})
;
decrement.addEventlistener("click" , ()=>{
    counter;
    counterValue.innerText = counter
});