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

    // Optional fields to update
    $updates = [];
    if (isset($data['username'])) $updates['username'] = $data['username'];
    if (isset($data['email'])) $updates['email'] = $data['email'];
    if (isset($data['first_name'])) $updates['first_name'] = $data['first_name'];
    if (isset($data['last_name'])) $updates['last_name'] = $data['last_name'];
    if (isset($data['address'])) $updates['address'] = $data['address'];
    if (isset($data['valid_id'])) $updates['valid_id'] = $data['valid_id'];

    // If no fields are provided, throw an error
    if (empty($updates)) {
        echo json_encode([
            "status" => "error",
            "message" => "No fields provided for update."
        ]);
        exit;
    }

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

    // Update the user fields
    $userRef->update($updates);

    // Return success response
    echo json_encode([
        "status" => "success",
        "message" => "User updated successfully."
    ]);
} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
