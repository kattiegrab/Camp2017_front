
// ======= account balance ==========
const accountAmount = document.querySelector('#balance');

$.get("https://efigence-camp.herokuapp.com/api/data/summary", data => {
	const balanceValue = data.content[0].balance;

	accountAmount.innerText = balanceValue + ' PLN';
});
// basic form validation - Are all fields filled?
const continueBtn = document.querySelector('.btn-continue');
const inputRecipient = document.querySelector('.recipient-input');
const recipientErrorContainer = document.querySelector('.recipient-error-msg')

continueBtn.addEventListener('click', () => {
	if (inputRecipient.value === '') {
		recipientErrorContainer.innerText = 'Please enter recipient name!';
		inputRecipient.className += ' error';
	}


})
// ========== end of account balance =======
// date picker
  $( function() {
    $( "#datepicker" ).datepicker();
  } );