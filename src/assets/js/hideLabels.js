const hideLabels = (phone, email, message, checkboxPolicy, buttonSubmit) => {
  const inputsArray = [
    document.querySelector(phone),
    document.querySelector(email),
    document.querySelector(message),
  ];

  inputsArray.forEach((input) => {
    input.addEventListener('blur', (e) => {
      e.target.value.length >= 1
        ? (e.target.nextElementSibling.style.visibility = 'hidden')
        : (e.target.nextElementSibling.style.visibility = 'visible');
    });
  });

  //enable btn-submit
  const btnSubmit = document.querySelector(buttonSubmit);

  document.querySelector(checkboxPolicy).addEventListener('change', () => {
    btnSubmit.getAttribute('disabled') !== null
      ? (btnSubmit.disabled = false)
      : (btnSubmit.disabled = true);
  });
};

export default hideLabels;
