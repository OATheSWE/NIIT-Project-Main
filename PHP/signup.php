<?php
include 'db.php';

// Retrieve the form data
$formData = $_POST['formData'];

// Generate matric number (random number for simplicity)
$matricNumber = (string)mt_rand(100000, 999999);

// Prepare SQL statement to insert matric number and form data into students table
$stmt = $connection->prepare("INSERT INTO students (matric_number, student_data) VALUES (?, ?)");
$stmt->bind_param("ss", $matricNumber, $formData);

// Execute the prepared statement
if ($stmt->execute()) {
    echo json_encode(['success' => true, 'matricNumber' => $matricNumber]);
} else {
    echo json_encode(['success' => false, 'error' => $connection->error]);
}

// Close the statement and connection
$stmt->close();
$connection->close();
?>
