const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

form.addEventListener('submit', (event) => {
    
    validateForm();
    
    if(isFormValid()==true){
        form.submit();
    } else {
        event.preventDefault();

    }

});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group');
    let result=true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });

    return result;
}

function validateForm() {
    //userName
    if(usernameInput.value.trim()==''){
        setError(usernameInput, 'Name Cannot be empty');
    } else if (usernameInput.value.trim().length < 5 ||
         usernameInput.value.trim().length > 15) {
            setError(usernameInput, 'Name must be min 5 and max 15 character');
         } else {
            setSuccess(usernameInput);
         }
    //email
    if(emailInput.value.trim()==''){
        setError(emailInput, 'Email cannot be empty');
    }else if(isEmailValid(emailInput.value)){
            setSuccess(emailInput);
    }else{
        setError(emailInput, 'Provide a valid Email Address');
    }
    //password
    if(passwordInput.value.trim()==''){
        setError(passwordInput, 'Password Cannot be Empty');
    }else if (passwordInput.value.trim().length <6 ||
    passwordInput.value.trim().length >15){
        setError(passwordInput, 'Password Min 6 and Max 15 character');
    }else{
        setSuccess(passwordInput);
    }
    //confirmPassword
    if(confirmPassword.value.trim()==''){
        setError(confirmPassword, 'Confirm Password can not be empty');
    }else if (confirmPassword.value !== passwordInput.value){
        setError(confirmPassword, 'Password does not match');
    }else{
        setSuccess(confirmPassword);
    }
}

function setError(element, errorMessage){
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success'); 
}
function isEmailValid(email){
    const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return reg.test(email);
}