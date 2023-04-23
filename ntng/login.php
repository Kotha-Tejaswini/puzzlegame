<?php
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle login form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = $_POST["email"];
  $password = $_POST["password"];

  // Query the database for a user with matching credentials
  $sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    // User authenticated successfully
    header("Location: dashboard.php");
    exit();
  } else {
    // Invalid credentials
    echo "Invalid email or password";
  }
}

$conn->close();
?>
