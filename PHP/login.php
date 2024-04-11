<?php
include 'db.php';

$matricNumber = $_POST['matricNumber'];
$password = $_POST['password'];

// Prepare SQL statement to retrieve data from students table
$sql = "SELECT * FROM students WHERE matric_number = ?";
$stmt = $connection->prepare($sql);
$stmt->bind_param("s", $matricNumber);

// Execute the prepared statement
if ($stmt->execute()) {
    $result = $stmt->get_result();
    // Check if any rows are returned
    if ($result->num_rows > 0) {
        // Fetch data from the first row (assuming matric_number is unique)
        $row = $result->fetch_assoc();
        
        // Extract student data
        $studentData = json_decode($row['student_data'], true);
        
        // Check if password matches
        if ($password === $studentData['password']) {
            echo json_encode(['success' => true, 'matric_number' => $matricNumber]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Incorrect password']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'No student found']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Database error: ' . $connection->error]);
}

// Close the statement and connection
$stmt->close();
$connection->close();
?>
