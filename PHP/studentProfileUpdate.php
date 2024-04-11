<?php
include 'db.php';

// Get the matric number and form data from the frontend
$matricNumber = $_POST['matric_number'];
$formData = $_POST['formData'];

// Construct the SQL query to update student data based on matric_number
$sql = "UPDATE students SET student_data = ? WHERE matric_number = ?";

$stmt = mysqli_prepare($connection, $sql);
mysqli_stmt_bind_param($stmt, "ss", $formData, $matricNumber);
$result = mysqli_stmt_execute($stmt);

if ($result) {
    echo json_encode(['success' => true, 'message' => 'Student data updated successfully']);
} else {
    echo json_encode(['success' => false, 'error' => mysqli_error($connection)]);
}

mysqli_close($connection);
?>
