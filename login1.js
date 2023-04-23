function login() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	// validate username and password here

	// assume validation succeeds and user is logged in
    if(username==='' || password==='' ){
        showError("This field can't be empty");
        // location.href = "8.html";
    }
    // if(password==''){
    //     showError('Username is required');
    // }
	else{
        alert("Login successful!");
	// redirect user to next page
    }
}
