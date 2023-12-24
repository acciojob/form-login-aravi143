function getFormvalue() {
    //Write your code here
	event.preventDefault();
	
	const firstName = form.elements['fname'].value;
	const lastName = form.elements['lname'].value;
	
	alert(`${firstNamename} ${lastNamename}`)
}
const form = document.getElementById('form1')
form.addEventListener('submit',getFormvalue);
