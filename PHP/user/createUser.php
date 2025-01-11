<?php
header("Content-Type: application/json");

require_once __DIR__ . '/../core/Database.php';

try {
    // Get the data from the incoming request
    $data = json_decode(file_get_contents("php://input"), true);

    // Validate the input
    if (
        !isset($data['username']) ||
        !isset($data['email']) ||
        !isset($data['first_name']) ||
        !isset($data['last_name']) ||
        !isset($data['address']) ||
        !isset($data['valid_id'])
    ) {
        echo json_encode([
            "status" => "error",
            "message" => "Username, email, first name, last name, address, and valid ID are required."
        ]);
        exit;
    }

    $username = $data['username'];
    $email = $data['email'];
    $firstName = $data['first_name'];
    $lastName = $data['last_name'];
    $address = $data['address'];
    $validId = $data['valid_id']; // Include valid ID

    // Store user data in the Firebase database
    $database = Database::getInstance();

    // Create a new user reference in Firebase under 'users'
    $userRef = $database->getReference('users')->push();
    $userRef->set([
        'username' => $username,
        'email' => $email,
        'first_name' => $firstName,
        'last_name' => $lastName,
        'address' => $address,
        'valid_id' => $validId // Add valid ID to the database
    ]);

    // Return success response
    echo json_encode([
        "status" => "success",
        "message" => "User created successfully."
    ]);
} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
