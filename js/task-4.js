const formElem = document.querySelector('.login-form')
// console.log(formElem);



formElem.addEventListener('submit', event => {
    event.preventDefault();

    const inputEmail = formElem.elements.email.value.trim();
    // console.log(inputEmail);

    const inputPassword = formElem.elements.password.value.trim();
    // console.log(inputPassword);

    if (inputEmail === '' || inputPassword === '') {
        return alert('All form fields must be filled in');
    }

    const values = {
        email: inputEmail,
        password: inputPassword,
    };

    console.log(values);
    
    formElem.reset();
});