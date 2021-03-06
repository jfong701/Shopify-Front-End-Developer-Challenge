/** 
Executed when button "Sign up now" button is clicked
*/
function signUp() {
	var msg_prompt = document.getElementById("message");
	var email_elem = document.getElementById("email");
	
	var email = email_elem.value;
	
	if (!validEmail(email)) {
		msg_prompt.style.opacity = 1;
	} else {
		msg_prompt.style.opacity = 0;
		console.log(email, getSelectedInterest());
	}
}

/**
Helper function for email validation.
Simple JS email validation from: 
https://stackoverflow.com/questions/46155/how-can-you-validate-an-email-address-in-javascript
*/
function validEmail(email) {
	var regex = /\S+@\S+\.\S+/;
	return regex.test(email);
}

/**
Helper function that returns a string of what would be sent to the server.
*/
function getSelectedInterest() {
	var interests_elem = document.getElementById("interests");
	return interests_elem.options[interests_elem.selectedIndex].value;
}