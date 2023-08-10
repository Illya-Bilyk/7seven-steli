const refs = {
  form: document.querySelector('#form'),
  submit: document.querySelector('#submit'),
};

const handleSubmit = async e => {
  e.preventDefault();
  const {
    elements: { name, phone, message },
  } = e.currentTarget;

  console.log(`name: ${name.value}, phone: ${phone.value},message: ${message}`);
  e.currentTarget.reset();
};

refs.form.addEventListener('submit', handleSubmit);
