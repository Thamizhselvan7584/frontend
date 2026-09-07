const myButton = document.getElementById('myButton');
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


