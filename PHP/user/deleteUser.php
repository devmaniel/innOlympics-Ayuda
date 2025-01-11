<?php
header("Content-Type: application/json");

require_once __DIR__ . '/../core/Database.php';

try {
    // Get the data from the incoming request
    $data = json_decode(file_get_contents("php://input"), true);

    // Validate the input
    if (!isset($data['userId'])) {
        echo json_encode([
            "status" => "error",
            "message" => "User ID is required."
        ]);
        exit;
    }

    $userId = $data['userId'];

    // Connect to Firebase
    $database = Database::getInstance();

    // Reference the user by their unique ID
    $userRef = $database->getReference('users/' . $userId);

    // Check if the user exists
    if (!$userRef->getSnapshot()->exists()) {
        echo json_encode([
            "status" => "error",
            "message" => "User not found."
        ]);
        exit;
    }

    // Delete the user
    $userRef->remove();

    // Return success response
    echo json_encode([
        "status" => "success",
        "message" => "User deleted successfully."
    ]);
} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
