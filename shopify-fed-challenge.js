function signUp() {
	var msg_prompt = document.getElementById("message");
	var email_elem = document.getElementById("email");
	
	var email = email_elem.value;
	alert(typeof(email));
	alert(email);
	msg_prompt.style.opacity = 1;
}