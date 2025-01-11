<?php
// Start session to access session data
require_once '../core/cors.php';
session_start();

// Check if the user session exists
if (isset($_SESSION['user'])) {
    // User is logged in, return user details
    echo json_encode(['user' => $_SESSION['user']]);
} else {
    // User is not logged in, return null
    echo json_encode(['user' => null]);
}
?>
