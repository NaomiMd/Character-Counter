let textareaEl = document.getElementById("text");
let totalEl = document.getElementById("total-counter");
let remainingEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", ()=>{
    updateCounter();
});

updateCounter();

function updateCounter(){
    totalEl.innerText = textareaEl.value.length;
    remainingEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}