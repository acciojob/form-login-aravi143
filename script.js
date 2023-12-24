function getFormvalue() {
    //Write your code here
	event.preventDefault();
	
    const form = document.getElementById('form1')
	const firstName = form.element('fname').value;
	const lastName = form.element('lname').value;
	
	alert(`${firstName} ${lastName}`)
}
form.addEventListener('submit',getFormvalue());
