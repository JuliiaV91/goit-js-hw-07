
const fieldEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

fieldEl.addEventListener('input', event => {
    const inputText = fieldEl.value.trim()
    spanEl.textContent = inputText || 'Anonymous';
});
