document.addEventListener('DOMContentLoaded', function () {
    (function () {
// ============= message window =====================
    	const messages = document.querySelector('.message-icon');
    	const messagesContainer = document.querySelector('.messages');
    	messages.addEventListener('click', () => {
    		if (messagesContainer.style.display === "none") {
    			messagesContainer.style.display = "block";
    		} else {
    			messagesContainer.style.display = "none"
    		}
    	});
    	// 
// ============== end of message window ============= 
// ============ CHART =================
		var ctx = document.querySelector('#myChart').getContext('2d');
		var chart = new Chart(ctx, {
    // The type of chart we want to create
	    type: 'line',

	    // The data for our dataset
	    data: {
	        labels: ["1", "3", "7", "11", "14", "21", "25"],
	        datasets: [{
	        	label: "Account",
	            backgroundColor: '#007AB7',
	            borderColor: '#007AB7',
	            data: [12000, 5000, 4000, 10000, 17000, 7300, 1000],
		        }]
		    },
		    options: {
		    	padding: {
	                left: 50,
	                right: 0,
	                top: 0,
	                bottom: 0
	            }
		    }
		});
// ============= end of CHART ==============


// ================ get data from API ===================
	const balance = document.querySelector('#balance');
    const funds = document.querySelector('#funds');
    const payments = document.querySelector('#payments');

	let url = "https://efigence-camp.herokuapp.com/api/data/summary";
	
// =================== end of get data ================= 
 	})(); //end of main function
}); //end of doc event listener
