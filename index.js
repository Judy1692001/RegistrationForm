document.getElementById('firstname').addEventListener('input', (e) => {

    if (e.target.value === '') {

        document.getElementById('firstname').style.borderColor = '#9b7547';

        document.getElementsByTagName('div')[0].style.display = 'none';

        document.getElementById('firstname').style.marginBottom = '37px';

    }

    else if (e.target.value.length > 0 && e.target.value.length < 10) {

        document.getElementById('firstname').style.borderColor = 'green';

        document.getElementsByTagName('div')[0].style.display = 'none';

        document.getElementById('firstname').style.marginBottom = '37px';

    }

    else {

        document.getElementById('firstname').style.borderColor = 'red';

        document.getElementsByTagName('div')[0].style.display = 'block';

        document.getElementById('firstname').style.marginBottom = '10px';

        document.getElementsByClassName('msg-1')[0].style.marginBottom = '27px';

    }

});

document.getElementById('lastname').addEventListener('input', (e) => {

    if (e.target.value === '') {

        document.getElementById('lastname').style.borderColor = '#9b7547';

        document.getElementsByTagName('div')[1].style.display = 'none';

        document.getElementById('lastname').style.marginBottom = '37px';

    }

    else if (e.target.value.length > 0 && e.target.value.length < 10) {

        document.getElementById('lastname').style.borderColor = 'green';

        document.getElementsByTagName('div')[1].style.display = 'none';

        document.getElementById('lastname').style.marginBottom = '37px';

    }

    else {

        document.getElementById('lastname').style.borderColor = 'red';

        document.getElementsByTagName('div')[1].style.display = 'block';

        document.getElementById('lastname').style.marginBottom = '10px';

        document.getElementsByClassName('msg-1')[1].style.marginBottom = '27px';

    }

});

function hasLower(input) {
    
    return /[a-z]/.test(input);

}

function hasUpper(input) {
    
    return /[A-Z]/.test(input);

}

function hasSymbol(input) {
    
    return /[!@#$%^&*(),.?":{}|<>]/.test(input);

}

function hasNumber(input) {
    
    return /[1-9]/.test(input);

}

document.getElementById('password').addEventListener('input', (e) => {

    if (e.target.value === '') {

        document.getElementById('password').style.borderColor = '#9b7547';

        document.getElementsByTagName('div')[2].style.display = 'none';

        document.getElementById('password').style.marginBottom = '37px';

    }

    else if (e.target.value.length > 0 && e.target.value.length < 8
        
        && hasLower(e.target.value) && hasUpper(e.target.value)
        
        && hasSymbol(e.target.value) && hasNumber(e.target.value)) {

        document.getElementById('password').style.borderColor = 'green';

        document.getElementsByTagName('div')[2].style.display = 'none';

        document.getElementById('password').style.marginBottom = '37px';

    }

    else {

        document.getElementById('password').style.borderColor = 'red';

        document.getElementsByTagName('div')[2].style.display = 'block';

        document.getElementById('password').style.marginBottom = '10px';

        document.getElementById('msg-2').style.marginBottom = '27px';

    }

});

document.getElementById('confirmpassword').addEventListener('input', (e) => {

    if (e.target.value === '') {

        document.getElementById('confirmpassword').style.borderColor = '#9b7547';

        document.getElementsByTagName('div')[3].style.display = 'none';

        document.getElementById('confirmpassword').style.marginBottom = '37px';

    }

    else if (document.getElementById('password').style.borderColor === 'green' && e.target.value === document.getElementById('password').value) {

        document.getElementById('confirmpassword').style.borderColor = 'green';

        document.getElementsByTagName('div')[3].style.display = 'none';

        document.getElementById('confirmpassword').style.marginBottom = '37px';

    }

    else {

        document.getElementById('confirmpassword').style.borderColor = 'red';

        document.getElementsByTagName('div')[3].style.display = 'block';

        document.getElementById('confirmpassword').style.marginBottom = '10px';

        document.getElementById('msg-3').style.marginBottom = '27px';

    }

});

function isValidEmail(input) {

    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input);

}

document.getElementById('email').addEventListener('input', (e) => {

    if(e.target.value === '') {

        document.getElementById('email').style.borderColor = '#9b7547';

        document.getElementsByTagName('div')[4].style.display = 'none';

        document.getElementById('email').style.marginBottom = '37px';

    }

    else if (isValidEmail(e.target.value)) {

        document.getElementById('email').style.borderColor = 'green';

        document.getElementsByTagName('div')[4].style.display = 'none';

        document.getElementById('email').style.marginBottom = '37px';

    }

    else {

        document.getElementById('email').style.borderColor = 'red';

        document.getElementsByTagName('div')[4].style.display = 'block';

        document.getElementById('email').style.marginBottom = '10px';

        document.getElementById('msg-4').style.marginBottom = '27px';

    }

});

function isValidMobileNumber(input) {

    return /^01[0-9]{9}$/.test(input);

}

document.getElementById('phonenumber').addEventListener('input', (e) => {

    if(e.target.value === '') {

        document.getElementById('phonenumber').style.borderColor = '#9b7547';

        document.getElementsByTagName('div')[5].style.display = 'none';

        document.getElementById('phonenumber').style.marginBottom = '37px';

    }

    else if (isValidMobileNumber(e.target.value)) {

        document.getElementById('phonenumber').style.borderColor = 'green';

        document.getElementsByTagName('div')[5].style.display = 'none';

        document.getElementById('phonenumber').style.marginBottom = '37px';

    }

    else {

        document.getElementById('phonenumber').style.borderColor = 'red';

        document.getElementsByTagName('div')[5].style.display = 'block';

        document.getElementById('phonenumber').style.marginBottom = '10px';

        document.getElementById('msg-5').style.marginBottom = '27px';

    }

});

document.getElementById('cv').addEventListener('change', (e) => {

    const file = e.target.files[0];

    const fileName = file.name;

    const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;

    if(!allowedExtensions.exec(fileName)) {

        document.getElementsByTagName('div')[6].style.display = 'block';

        document.getElementById('cv').style.marginBottom = '10px';

        document.getElementById('msg-6').style.marginBottom = '27px';

        e.target.value = '';

    }

    else {

        document.getElementsByTagName('div')[6].style.display = 'none';

        document.getElementById('cv').style.marginBottom = '37px';

    }

});

function validateForm() {

    const firstnameValid = document.getElementById('firstname').style.borderColor === 'green';

    const lastnameValid = document.getElementById('lastname').style.borderColor === 'green';

    const passwordValid = document.getElementById('password').style.borderColor === 'green';

    const confirmPasswordValid = document.getElementById('confirmpassword').style.borderColor === 'green';

    const emailValid = document.getElementById('email').style.borderColor === 'green';

    const phoneNumberValid = document.getElementById('phonenumber').style.borderColor === 'green';

    const cvValid = document.getElementsByTagName('div')[6].style.display === 'none';

    document.getElementById('submit-btn').disabled = !(

        firstnameValid &&

        lastnameValid &&

        passwordValid &&

        confirmPasswordValid &&

        emailValid &&

        phoneNumberValid &&

        cvValid

    );

}

document.getElementById('firstname').addEventListener('input', validateForm);

document.getElementById('lastname').addEventListener('input', validateForm);

document.getElementById('password').addEventListener('input', validateForm);

document.getElementById('confirmpassword').addEventListener('input', validateForm);

document.getElementById('email').addEventListener('input', validateForm);

document.getElementById('phonenumber').addEventListener('input', validateForm);

document.getElementById('cv').addEventListener('change', validateForm);

document.getElementById('submit-btn').addEventListener('click', (e) => {

    e.preventDefault();

    document.getElementsByTagName('form')[0].reset();
    
    document.getElementsByTagName('form')[0].style.display = 'none';

    document.getElementsByTagName('h1')[0].style.display = 'block';

});