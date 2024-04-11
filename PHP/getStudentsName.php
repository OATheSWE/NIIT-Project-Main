<?php
include 'db.php';

// Get the matric_number from the frontend
$matric_number = $_POST['encrypted_matric_number'];

// Construct the SQL query to select the user's name based on matric_number
$sql = "SELECT JSON_UNQUOTE(JSON_EXTRACT(student_data, '$.name')) AS name 
        FROM students 
        WHERE matric_number = ?";

$stmt = mysqli_prepare($connection, $sql);
mysqli_stmt_bind_param($stmt, "s", $matric_number);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);

if ($result) {
    // Check if any rows were returned
    if (mysqli_num_rows($result) > 0) {
        // Fetch the user's name
        $row = mysqli_fetch_assoc($result);
        $name = $row['name'];

        // Send the user's name as JSON response to frontend
        echo json_encode(['success' => true, 'name' => $name]);
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
