<?php
header("Content-Type: application/json");

require_once __DIR__ . '/../core/Database.php';

try {
    // Get the data from the incoming request
    $data = json_decode(file_get_contents("php://input"), true);

    // Validate the input
    if (
        !isset($data['name']) ||
        !isset($data['description']) ||
        !isset($data['created_by'])
    ) {
        echo json_encode([
            "status" => "error",
            "message" => "All fields (name, description, created_by) are required."
        ]);
        exit;
    }

    $name = $data['name'];
    $description = $data['description'];
    $createdBy = $data['created_by'];
    $createdAt = date("Y-m-d H:i:s");

    // Connect to Firebase
    $database = Database::getInstance();

    // Create a new event reference in Firebase under 'events' collection
    $eventRef = $database->getReference('events')->push();
    $eventRef->set([
        'name' => $name,
        'description' => $description,
        'created_at' => $createdAt,
        'created_by' => $createdBy
    ]);

    // Return success response
    echo json_encode([
        "status" => "success",
        "message" => "Event created successfully."
    ]);
} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
