document.addEventListener('DOMContentLoaded', function () {
    (function () {

        const button = document.querySelector('#submit-button');
        const input = document.querySelector('#input-password');

        button.addEventListener("click", function(event) {
            console.log(input.value);

            var alert = document.querySelector('#password-alert');

            if (input.value.length < 8) {
        		alert.innerHTML = "Password is too short. It has to be at least 8 characters long!";
        		input.className += ' error';
	        }
	        if (input.value === '') {
	        	alert.innerHTML = "Please enter your password";
	        	input.className += ' error';
	        } else {
	        	console.log(window.location);
	        	window.location.href = 'index.html';
	        }
        });




    })();
})

//pobrac wartosc hasla
//walidacja: zczytanie pola hasla, przygotowanie instrukcji war ktora sprawdz czy pola sa wypelnione, jezeli ktores nie jest
//dodaj np klase error(obramowanie na czerwono), jezeli wszystkie pola wprowadzone to zmien lokalizacje na index.html