/* const myButton = document.getElementById('myButton');
const one = document.getElementById('one');


one.textContent = 'Button was clicked!';


myButton.addEventListener('click', () => {
    


    if (one.style.display === 'none') {
        one.style.display = 'block';
        myButton.textContent = 'hide';


    } else {
        one.style.display = 'none';
        myButton.textContent = 'show';
    }
});
 */


const button = document.getElementById("toggleBtn");
const box = document.getElementById("box");

let isVisible = true;

button.addEventListener("click", () => {

    isVisible = !isVisible;

    if (isVisible) {
        box.style.display = "block";
        button.textContent = "Hide";
    } else {
        box.style.display = "none";
        button.textContent = "Show";
    }

});
