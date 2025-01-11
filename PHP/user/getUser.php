<?php
header("Content-Type: application/json");

require_once __DIR__ . '/../core/Database.php';

try {
    // Get the data from the incoming request
    $data = json_decode(file_get_contents("php://input"), true);

    // Validate the input
    if (!isset($data['id'])) {
        echo json_encode([
            "status" => "error",
            "message" => "User ID is required."
        ]);
        exit;
    }

    $userId = $data['id'];

    // Get the database instance and fetch user data
    $database = Database::getInstance();

    $userRef = $database->getReference('users/' . $userId);
    $userSnapshot = $userRef->getSnapshot();

    // Check if the user exists
    if ($userSnapshot->exists()) {
        $user = $userSnapshot->getValue();
        echo json_encode([
            "status" => "success",
            "user" => $user
        ]);
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "User not found."
        ]);
    }
} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
