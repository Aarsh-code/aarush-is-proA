document.getElementById('login-btn').addEventListener('click', function(event) {
	event.preventDefault();
	var name = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var date = document.getElementById('date').value;
	var gender = document.getElementById('gender').value;

	// Validate form data here (optional)

	// Redirect to HTML website
	window.location.href = 'website.html';
});