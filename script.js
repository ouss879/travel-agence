let product= document.querySelectorAll(".ligne1")
console.log(product)

let prix= document.querySelectorAll(".prix")
console.log(prix)

let decrease= document.querySelectorAll(".decrease")
console.log(decrease)
let increase= document.querySelectorAll(".increase")
console.log(increase)

let quant= document.querySelectorAll(".quant")
console.log(quant)
let delet = document.querySelectorAll(".delete")
console.log(delet)
let total = document.querySelector(".prix-total")

console.log(total)

updat ()
for (let i = 0; i< delet.length; i++) {
    delet[i].addEventListener("click",()=>{
        product[i].remove()
        quant[i].value=0
        updat()
    
    });
    
}

for (let i = 0; i < increase.length; i++) {

    increase[i].addEventListener("click",()=> {
        quant[i].value ++; updat()})
        
    
}
for (let i = 0; i < decrease.length; i++) {

    decrease[i].addEventListener("click", dec)
        function dec() {
            quant[i].value --;
            updat();
            
        }
        
    
}

function updat () {
    let totl= 0;
    for (let i = 0; i < prix.length; i++) {

        totl += parseInt (prix[i].innerHTML) * quant[i].value;
        

        
    }
    total.innerHTML = totl;
    
    
}