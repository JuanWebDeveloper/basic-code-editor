const code = document.getElementById('code');
const view = document.getElementById('view');

code.addEventListener('keyup', () => {
    view.srcdoc = code.value;
});


