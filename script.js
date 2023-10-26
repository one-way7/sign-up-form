document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form');
    const password = document.querySelector('#password');
    const confirmedPassword = document.querySelector('#confirmed_password');


    form.addEventListener('submit', e => {
        e.preventDefault();

        if (!password.length >= 8) return;
       
        if (password.value === confirmedPassword.value) {
            password.nextElementSibling.classList.remove('invalid-password');
            
            form.reset();
            alert('The form has been successfully submitted')
        } else {
            password.nextElementSibling.classList.add('invalid-password');
            return;
        }
    })
})