const errorMessages = {
  empty: 'Email address value required',
  invalid_format: 'Valid email required'
}

const subscribe = () => {
  const emailAddressInputElement = document.getElementById('email_address');
  const emailInvalidElement = document.getElementById('email-invalid');
  const validation = validateEmail(emailAddressInputElement);
  if (Object.keys(validation).includes('error')) {
    emailInvalidElement.innerHTML = errorMessages[validation.error];
    emailInvalidElement.style.visibility = 'visible';
    emailAddressInputElement.classList.add('input-error');
    document.getElementsByClassName('overlay')[0].classList.add('hidden');
    document.getElementsByClassName('success-card')[0].classList.add('hidden');
  } else {
    const confirmedEmailAddressElement = document.getElementById('confirmed_email_address');
    confirmedEmailAddressElement.innerHTML = emailAddressInputElement.value;
    confirmedEmailAddressElement.classList.add('bold');
    emailInvalidElement.style.visibility = 'hidden';
    emailAddressInputElement.classList.remove('input-error');
    document.getElementsByClassName('overlay')[0].classList.remove('hidden');
    document.getElementsByClassName('success-card')[0].classList.remove('hidden');
  }
}

const validateEmail = (emailAddressInputElement) => {
  const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailAddressInputElement.value === '' || emailAddressInputElement.value === null) {
    return { error: 'empty' }
  } else if (!emailAddressInputElement.value.match(validEmailRegex)) {
    return { error: 'invalid_format' }
  } else {
    return {}
  }
}

const dismissSuccessMessage = () => {
  document.getElementsByClassName('success-card')[0].classList.add('hidden');
  document.getElementsByClassName('overlay')[0].classList.add('hidden');
  document.getElementById('email_address').value = '';
}