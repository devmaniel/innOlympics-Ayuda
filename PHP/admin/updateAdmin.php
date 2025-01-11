<?php
header("Content-Type: application/json");

require_once __DIR__ . '/../core/Database.php';

try {
    // Get the admin_id from the query parameter and other updated data from the body
    if (!isset($_GET['admin_id'])) {
        echo json_encode([
            "status" => "error",
            "message" => "Admin ID is required."
        ]);
        exit;
    }

    $adminId = $_GET['admin_id'];
    $data = json_decode(file_get_contents("php://input"), true);

    // Validate the input
    if (
        !isset($data['username']) ||
        !isset($data['role']) ||
        !isset($data['email'])
    ) {
        echo json_encode([
            "status" => "error",
            "message" => "All fields (username, role, email) are required."
        ]);
        exit;
    }

    $username = $data['username'];
    $role = $data['role'];
    $email = $data['email'];

    // Connect to Firebase
    $database = Database::getInstance();

    // Update the admin record in Firebase under 'admin' collection
    $adminRef = $database->getReference('admin/' . $adminId);
    $adminRef->update([
        'username' => $username,
        'role' => $role,
        'email' => $email
    ]);

    // Return success response
    echo json_encode([
        "status" => "success",
        "message" => "Admin updated successfully."
    ]);
} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
