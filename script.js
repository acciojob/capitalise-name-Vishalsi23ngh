//your JS code here. If required.
const inputField = document.getElementById("fname");

inputField.addEventListener("blur" ,function() {
	const value = inputField.value;
	const outputValue = value.toUpperCase();
	inputField.value = outputValue;
})

