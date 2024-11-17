
const inputEl = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    }

function createBoxes(amount) {
    const elements = [];
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        
        const size = 30 + i * 10; 
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        
        elements.push(box);
      }
    boxesContainer.append(...elements); 
    }

    function destroyBoxes() {
      boxesContainer.innerHTML = ''; 
    }

createButton.addEventListener('click', () => {
    const amount = parseInt(inputEl.value, 10);

    if (amount >= 1 && amount <= 100) {
        destroyBoxes(); 
        createBoxes(amount); 
      } else {
        alert('Будь ласка, введіть число від 1 до 100'); 
      }

      input.value = '';
    });

destroyButton.addEventListener('click', destroyBoxes);

