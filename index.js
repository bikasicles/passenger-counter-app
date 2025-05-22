// grab the count-el element, store it in a countEl variable
let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0
console.log(count)

function increment() {
    count = count + 1
    console.log(count)
    // set countEl's innerText to the count
    countEl.innerText = count
}
