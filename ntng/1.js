// function myFunction() {
//     window.location.href = "2.html";
//   }
// function myFun(){
//     window.location.href = "1st.html"
// }
// const form = document.getElementById('loginForm');

// form.addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent the form from submitting

//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;

//   if (username === '' || password === '') {
//     alert('Please enter a username and password.');
//   } else if (username !== 'validusername' || password !== 'validpassword') {
//     alert('Invalid username or password.');
//   } else {
//     // Login successful - redirect to dashboard or do some other action
//     window.location.href = '/dashboard';
//   }
// });
function login() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	// validate username and password here

	// assume validation succeeds and user is logged in
	alert("Login successful!");

	// redirect user to next page
	window.location.href = "3.html";
}
