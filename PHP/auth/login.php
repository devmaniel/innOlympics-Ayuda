<?php
include '../core/cors.php';  // Include your CORS configuration
session_start(); // Start the session

// Include Firebase database connection
require_once __DIR__ . '/../core/Database.php';  // Correct the path to Database.php

$db = Database::getInstance(); // Get Firebase database instance

// Get data from the request (e.g., email and password)
$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'] ?? '';  // Get email from input or set to empty string if not provided
$password = $data['password'] ?? '';  // Get password from input or set to empty string if not provided

// Your logic for checking user credentials against Firebase (example)
try {
    // Fetch all users from Firebase database
    $ref = $db->getReference('users');
    $users = $ref->getValue();

    if ($users) {
        foreach ($users as $userId => $user) {
            // Check if the email and password match
            if ($user['email'] === $email && password_verify($password, $user['pass'])) {
                // Correct credentials, set the session
                $_SESSION['user'] = [
                    'id' => $userId,
                    'name' => $user['fullName'],
                    'email' => $user['email'],
                    'role' => $user['role'] ?? 'user', // Optional: Add role if it exists
                ];

                // Respond with success and user data
                echo json_encode([
                    'success' => true,
                    'message' => 'Login successful',
                    'user' => $_SESSION['user'],
                ]);
                exit;
            }
        }
    }

    // If no matching user is found, return an error
    echo json_encode(['success' => false, 'message' => 'Invalid email or password']);
} catch (Exception $e) {
    // Handle any errors (e.g., database connection issues)
    echo json_encode(['success' => false, 'message' => 'Error: ' . $e->getMessage()]);
}
