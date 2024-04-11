<?php
include 'db.php';

// Get the encrypted matric number from the frontend
$matricNumber = $_POST['encrypted_matric_number'];

// Construct the SQL query to select the student data based on matric_number
$sql = "SELECT student_data FROM students WHERE matric_number = ?";

$stmt = mysqli_prepare($connection, $sql);
mysqli_stmt_bind_param($stmt, "s", $matricNumber);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);

if ($result) {
    // Check if any rows were returned
    if (mysqli_num_rows($result) > 0) {
        // Fetch the student data
        $row = mysqli_fetch_assoc($result);
        $student_data = $row['student_data'];

        // Send the student data as JSON response to frontend
        echo json_encode(['success' => true, 'studentData' => $student_data]);
    } else {
        // Send error response if matric_number is not found
        echo json_encode(['success' => false, 'error' => 'Student not found']);
    }
} else {
    // Send error response if query fails
    echo json_encode(['success' => false, 'error' => mysqli_error($connection)]);
}

mysqli_close($connection);
?>
