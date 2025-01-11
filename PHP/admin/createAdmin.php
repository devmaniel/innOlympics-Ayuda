<?php
header("Content-Type: application/json");

require_once __DIR__ . '/../core/Database.php';

try {
    // Get the data from the incoming request
    $data = json_decode(file_get_contents("php://input"), true);

    // Validate the input
    if (
        !isset($data['username']) ||
        !isset($data['password']) ||
        !isset($data['role']) ||
        !isset($data['email'])
    ) {
        echo json_encode([
            "status" => "error",
            "message" => "All fields (username, password, role, email) are required."
        ]);
        exit;
    }

    $username = $data['username'];
    $password = $data['password'];
    $role = $data['role'];
    $email = $data['email'];
    $createdAt = date("Y-m-d H:i:s");

    // Encrypt the password using password_hash()
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

    // Connect to Firebase
    $database = Database::getInstance();

    // Create a new admin reference in Firebase under 'admin' collection
    $adminRef = $database->getReference('admin')->push();
    $adminRef->set([
        'username' => $username,
        'password' => $hashedPassword,
        'role' => $role,
        'email' => $email,
        'created_at' => $createdAt
    ]);

    // Return success response
    echo json_encode([
        "status" => "success",
        "message" => "Admin created successfully."
    ]);
} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
