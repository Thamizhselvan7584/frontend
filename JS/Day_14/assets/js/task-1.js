let para = document.getElementById("para");
let btn = document.getElementById("btn");

btn.addEventListener("click", ()=> {

    para.textContent="This is the paragraph content.";
    para.classList.toggle("hidden");
});