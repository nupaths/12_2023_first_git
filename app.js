const message = 'The button was clicked!';
const myFunction = () => {
    alert(message);
}

const addClickListenerToButton = () => {
    document.getElementById('alert-user-button').addEventListener('click', myFunction);
}


myFunction();

window.onload = addClickListenerToButton;

// window.addEventListener('load', addClickListenerToButton);