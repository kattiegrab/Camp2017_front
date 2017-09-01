// ============= message window =====================
    	const messages = document.querySelector('.open-messages');
    	const messagesContainer = document.querySelector('.messages');
    	messages.addEventListener('click', () => {
    		if (messagesContainer.style.display === "none") {
    			messagesContainer.style.display = "block";
    		} else {
    			messagesContainer.style.display = "none"
    		}
    	});
// ============== end of message window ============= 