
function clickMe() {
    let lastName = document.getElementById('floatingLastName').value;
    let email = document.getElementById('floatingInput').value;
    let password = document.getElementById('floatingPassword').value;
    let firstName = document.getElementById('floatingFirstName').value;
    
    document.getElementById('errormessage').innerHTML= '';
    
    
    if (password.length<=5 && password.length>0) {
        document.getElementById('errormessage').innerHTML+="Слишком короткий пароль <br>";
    }
    
    if (firstName && lastName && email && password) {
        document.getElementById('errormessage').innerHTML+=(`Добро пожаловать, ${firstName}! <br>`);
    } else {
        document.getElementById('errormessage').innerHTML+=('Заполните все поля, пожалуйста.<br>');
    }

    
}