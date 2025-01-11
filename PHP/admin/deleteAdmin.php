<?php
header("Content-Type: application/json");

require_once __DIR__ . '/../core/Database.php';

try {
    // Get the admin_id from the query parameter
    if (!isset($_GET['admin_id'])) {
        echo json_encode([
            "status" => "error",
            "message" => "Admin ID is required."
        ]);
        exit;
    }

    $adminId = $_GET['admin_id'];

    // Connect to Firebase
    $database = Database::getInstance();

    // Delete the admin record from Firebase under 'admin' collection
    $adminRef = $database->getReference('admin/' . $adminId);
    $adminRef->remove();

    // Return success response
    echo json_encode([
        "status" => "success",
        "message" => "Admin deleted successfully."
    ]);
} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
