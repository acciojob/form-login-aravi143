function getFormvalue() {
    //Write your code here
	event.preventDefault();
	
	const firstName = document.getElementByName('fname');
	const lastName = document.getElementByName('lname');
	
	alert(`${firstNamename} ${lastNamename}`)
}
const form = document.getElementById('form1')
form.addEventListener('submit',getFormvalue());
