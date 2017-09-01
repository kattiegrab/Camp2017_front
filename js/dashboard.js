document.addEventListener('DOMContentLoaded', function () {
    (function () {
// =================== nav buttons ===================
		const logoutButton = document.querySelector('.off-icon');
		logoutButton.addEventListener('click', (event) => {
			window.location = "index.html";
		});
// ================= switch charts ================
		// const switchCharts = document.querySelector('.switch-input');
		// const mainChart = document.querySelector('#my-chart');
		
		// switchCharts.addEventListener('click', () => {
		
		// });

// ============ CHART =================
		const ctx = document.querySelector('#myChart').getContext('2d');
		let chart = new Chart(ctx, {
    // The type of chart we want to create
	    type: 'line',

	    // The data for our dataset
	    data: {
	        labels: ["1", "3", "7", "11", "14", "21", "25"],
	        //labels: [];
	        datasets: [{
	        	label: "Account history",
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

		const getSummary = (endpoint, containers) => {
			const balanceContainer = document.querySelector('#'+containers.balance);
			const fundsContainer = document.querySelector('#'+containers.funds);
			const paymentsContainer = document.querySelector('#'+containers.payments);

			$.get("https://efigence-camp.herokuapp.com/api/data/summary", data => {
					const balanceValue = data.content[0].balance;
					const fundsValue = data.content[0].funds;
					const paymentValue = data.content[0].payments;
					console.log(balanceValue, fundsValue, paymentValue);

					balanceContainer.innerText = balanceValue + ' PLN';
					fundsContainer.innerText = fundsValue + ' PLN';
					paymentsContainer.innerText = paymentValue + ' PLN';
				});
		}

	const endpoint = '/data/summary/';
	const containers = {
		balance: "balance",
		funds: "funds",
		payments: "payments"
	};

	getSummary(endpoint, containers);
// get products from Api ===== >>>>
	const getProducts = () => {
		$.get("https://efigence-camp.herokuapp.com/api/data/products", data => {

			// for (let i = 0; i < data.content.length; i++) {
			// 	const productType = data.content[i].type;
			// 	const productCurrency = data.content[i].currency;
			// 	const productAmount = data.content[i].amount;
			// 	console.log(productType, productCurrency, productAmount);
			// 	};
			// });

			const productsList = data.content;
		
			const productContainer = document.querySelector('.products-container');

			productsList.forEach((element, index) => {
				console.log(`Iteracja: ${index}`, element);

				const productTemplate =  `
						<div class='product-item'>
							<p>${element.type} <span class="product-ele">[${element.elements}]</span></p>
							<p>${element.amount} ${element.currency}<p>
						</div>`;

				productContainer.insertAdjacentHTML('beforeend', productTemplate);
			});
		});
	};
	getProducts();

	const getHistory = () => {
		$.get("https://efigence-camp.herokuapp.com/api/data/history", data => {
			const historyList = data.content;
			const historyContainer = document.querySelector('.history-container');

			historyList.forEach((element, index) => {
				console.log(`${index}`, element);

				const historyTemplate = `
				<div class="history-item">
					<span>${element.date}</span>
					<span class="history-desc">
						${element.description}
					</span>
					<span class="history-category">${element.category}</span>
					<span class="history-amount">${element.amount} ${element.currency}</span>
				</div>`;

				historyContainer.insertAdjacentHTML('beforeend', historyTemplate);
			});
		});
	};
	getHistory();

// =================== end of get data ================= 
 	})(); //end of main function
}); //end of doc event listener

//===============================================
// zadanie 30.08
//zrobic walidacje formularza przlewów
//link do historii
//search z historii, filtrowanie wyników
//widok kalendarza, obsługa strzałek js, obiekt date??
//podpowiedź w search po wpisaniu ilku liter
//tooltip do znaku zap.