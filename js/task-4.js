
const formEl = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();

  const formData = {
    [formEl.elements.email.name]: formEl.elements.email.value.trim(),
    [formEl.elements.password.name]: formEl.elements.password.value.trim(),
  };
    if (!formData.email || !formData.password) {
      alert('All form fields must be filled in');
      return; 
    }

  console.log(formData);

  formEl.reset();
};

formEl.addEventListener('submit', onFormSubmit);