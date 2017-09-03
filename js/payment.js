
// ======= account balance ==========
const accountAmount = document.querySelector('#balance');

$.get("https://efigence-camp.herokuapp.com/api/data/summary", data => {
	const balanceValue = data.content[0].balance;

	accountAmount.innerText = balanceValue + ' PLN';
});
// basic form validation - Are all fields filled?
const continueBtn = document.querySelector('.btn-continue');

const inputRecipient = document.querySelector('.recipient-input');
const recipientErrorContainer = document.querySelector('.recipient-error-msg');

const accountNumber = document.querySelector('.acc-num');
const numErrorContainer = document.querySelector('.num-error-msg');

const sumInput = document.querySelector('.sum-input');
const sumErrorContainer = document.querySelector('.sum-error-msg');

const dateInput = document.querySelector('.date-input');
const dateErrorContainer = document.querySelector('.date-error');

const titleInput = document.querySelector('.transfer-title');
const titleErrorContainer = document.querySelector('.title-error-msg');

continueBtn.addEventListener('click', () => {
	if (inputRecipient.value === '') {
		recipientErrorContainer.innerText = 'Please enter recipient name!';
		inputRecipient.className += ' error';
	}
	if (accountNumber.value === '') {
		numErrorContainer.innerText = 'Please enter account number!';
		accountNumber.className += ' error';
	}
	if (accountNumber.value.length < 28) { 
		numErrorContainer.innerText = 'Please enter correct account number!';
		accountNumber.className += ' error';
	}
	if (sumInput.value === '') {
		sumErrorContainer.innerText = 'Please enter sum of money to transfer!'
		sumInput.className += ' error';
	}
	if (dateInput.value === '') {
		dateErrorContainer.innerText = 'Please choose date!';
		dateInput.className += ' error'
	}
	if (titleInput.value === '') {
		titleErrorContainer.innerText = 'Please enter a title!';
		titleInput.className += ' error'
	}
})
// ========== end of account balance =======
// date picker
  $( function() {
    $( "#datepicker" ).datepicker();
  } );