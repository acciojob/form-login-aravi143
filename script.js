function getFormvalue() {
    //Write your code here
	event.preventDefault();
	
	const firstName = form.element('fname').value;
	const lastName = form.element('lname').value;
	
	alert(`${firstName} ${lastName}`)
}
    const forms = document.getElementById('form1')
forms.addEventListener('submit',getFormvalue());
