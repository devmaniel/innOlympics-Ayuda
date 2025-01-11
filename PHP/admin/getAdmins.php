<?php
header("Content-Type: application/json");

require_once __DIR__ . '/../core/Database.php';

try {
    // Connect to Firebase
    $database = Database::getInstance();

    // Fetch all admins from Firebase under 'admin' collection
    $adminsRef = $database->getReference('admin');
    $admins = $adminsRef->getValue();

    if ($admins) {
        echo json_encode([
            "status" => "success",
            "data" => $admins
        ]);
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "No admins found."
        ]);
    }
} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
