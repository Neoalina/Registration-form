

//Проверка для одного поля
let errors = [];
function checkValidity(input) {
    let validity = input.validity;

    // if (validity.patternMismatch) 
	// 	{ errors.push('Неверный формат заполнения'); }
    
	if (validity.rangeOverflow) 
		{ let max = input.maxlength;
			errors.push('Максимальное значение не может быть больше чем ' + max); }
    
	if (validity.rangeUnderflow) 
		{ let min = input.minlength;
			errors.push('Минимальное значение не может быть больше чем ' + min); }
}

//Проверка для всех полей
function clickMe() {
		//получаем все инпуты
    let inputs = document.querySelectorAll("input");

		//перебираем их и на каждый вызываем функцию валидации
    for (let input of inputs) {
        checkValidity(input);
    }

		//выводим ошибки в div 
    let errorDiv = document.querySelector('.errormessage');
    errorDiv.innerHTML = errors.join('. \n');
}


submitButton.onclick = function(event) {
	event.preventDefault();

	let user = {
		First_Name: document.getElementById('floatingFirstName').value,
		Last_Name: document.getElementById('floatingLastName').value,
		Email_adress: document.getElementById('floatingInput').value,
		Password: document.getElementById('floatingPassword').value
	}
	console.log(user);
	fetch('https://httpbin.org/post', {
		method: 'POST',
		body: JSON.stringify(user),
  		headers: {
     		'Content-Type':'application/json; charset=utf-8'
   		},
})
  .then(response => response.json())
  .then(user => {
    console.log(user);
  })
  .catch(error => console.log(error));
}

