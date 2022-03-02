// const ul = document.querySelector("ul")
// ul.remove();
const button = document.querySelector("button")

button.addEventListener("click", ()=>{
console.log("you clicked me");
})

const items = document.querySelectorAll("li");
items.forEach(items => {
    items.addEventListener("click",e => {
        console.log("item clicked");
        console.log(e.target);
        console.log(items);
    });
});