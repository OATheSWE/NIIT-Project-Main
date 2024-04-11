<?php
header('Access-Control-Allow-Origin: http://localhost:8081/');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, Accept, X-Requested-With");

header('Access-Control-Allow-Origin:  http://localhost:8081/');

$host = 'localhost';
$username = 'root';
$password = '';
$database = 'niit'; // Database name


// Establish connection
$connection = mysqli_connect($host, $username, $password, $database);

// Check connection
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

// Optional: Handle connection error using try-catch block for better error handling
/*
try {
    $connection = mysqli_connect($host, $user, $password, $database);
} catch (Exception $e) {
    die("Connection failed: " . $e->getMessage());
}
*/

?>