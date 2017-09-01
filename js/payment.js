
// ======= account balance ==========
const accountAmount = document.querySelector('#balance');

$.get("https://efigence-camp.herokuapp.com/api/data/summary", data => {
	const balanceValue = data.content[0].balance;

	accountAmount.innerText = balanceValue + ' PLN';
});
// ========== end of account balance =======
// date picker
  $( function() {
    $( "#datepicker" ).datepicker();
  } );