let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    saveEl.textContent += count + " - "
    count = 0
    countEl.textContent = 0
}

console.log("DOM : How to use Javascript to change the website")
console.log("Let's count people on the subway")
