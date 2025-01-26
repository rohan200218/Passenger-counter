// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")
let count = 0

function increment(){
    count+=1
    countEl.innerText = count
}

function save(){
    let message = " " + count + " - "
    saveEl.innerText += message // we can also use .textContent which is more better than .innerText
    console.log(count)
    countEl.textContent = 0
    count = 0

}

