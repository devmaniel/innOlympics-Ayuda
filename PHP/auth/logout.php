<?php
// Start session to access session data
require_once '../core/cors.php';
session_start();

// Destroy the session to log the user out
session_unset();
session_destroy();

// Return a response indicating logout success
echo json_encode(['success' => true, 'message' => 'User logged out successfully.']);
?>
