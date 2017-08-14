document.addEventListener('DOMContentLoaded', function () {
    (function () {

        const button = document.querySelector('#submit-button');
        const input = document.querySelector('#input-password');
        const alert = document.querySelector('.alert');
        const errorTriangle = document.querySelector('.error-triangle');

        button.addEventListener("click", function(event) {
            console.log(input.value);


         //    if (input.value.length < 8) {
        	// 	alert.innerHTML = "Password is too short. It has to be at least 8 characters long!";
        	// 	input.className += ' error';
	        // }
	        if (input.value === '') {
	        	alert.innerHTML = "Please enter your password";
	        	input.className += ' error';
    			errorTriangle.style.display = "block";
	        } else {
	        	console.log(window.location);
	        	// window.location.href = 'index.html';
	        	communicateApi(input.value);
	        }
        });
        
       function communicateApi(password) {
        $.ajax({
		  type: "post",
		  data: {
		    login: "efi",
		    password: password
		  },
		  url: "https://efigence-camp.herokuapp.com/api/login",
		  error: function(response) {
		    console.log(response.responseText);

		    const apiResponse = JSON.parse(response.responseText);

		    input.className += ' error';
		    alert.innerHTML = apiResponse.message;
		    errorTriangle.style.display = "block";

		  },
		  success: function(response) {
		    console.log(response);
		    input.className -= ' error'
		    errorTriangle.style.display = "none";
		    window.location.href = 'index.html';
		  }
		});
      };
})();
	
});

