// function validatename()
// {
    
//     x=document.getElementById("uname").value;
//     if (x=="")
//     {
//         errorblock=document.getElementById("errorname");
//         errorblock.innerHTML="name cannot be empty";
//         errorblock.style.display="block";
//     }
//     else{
//         errorblock=document.getElementById("errorname");
//         errorblock.style.display="none";
//     }
// }
// function validatenam()
// {
//     y=document.getElementById("pwd").value;
//     if (y=="")
//     {
//         errorbloc=document.getElementById("errornam");
//         errorbloc.innerHTML="password cannot be empty";
//         errorbloc.style.display="block";
//     }
//     else{
//         errorbloc=document.getElementById("errornam");
//         errorbloc.style.display="none";
//     }
// }
// function validatena()
// {
    
//     p=document.getElementById("email").value;
//     if (p=="")
//     {
//         errorblo=document.getElementById("errorna");
//         errorblo.innerHTML="email cannot be empty";
//         errorblo.style.display="block";
//     }
//     else{
//         errorblo=document.getElementById("errorna");
//         errorblo.style.display="none";
//     }
// }
const form = document.getElementById('loginForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === '' || password === '') {
    alert('Please enter a username and password.');
  } else if (username !== 'validusername' || password !== 'validpassword') {
    alert('Invalid username or password.');
  } else {
    // Login successful - redirect to dashboard or do some other action
    window.location.href = '/dashboard';
  }
});
