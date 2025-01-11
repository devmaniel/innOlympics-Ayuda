<?php
header("Content-Type: application/json");

require_once __DIR__ . '/../core/Database.php';

try {
    // Get the event_id from the query parameter and other updated data from the body
    if (!isset($_GET['event_id'])) {
        echo json_encode([
            "status" => "error",
            "message" => "Event ID is required."
        ]);
        exit;
    }

    $eventId = $_GET['event_id'];
    $data = json_decode(file_get_contents("php://input"), true);

    // Validate the input
    if (
        !isset($data['name']) ||
        !isset($data['description']) ||
        !isset($data['created_at']) ||
        !isset($data['created_by'])
    ) {
        echo json_encode([
            "status" => "error",
            "message" => "All fields (name, description, created_at, created_by) are required."
        ]);
        exit;
    }

    $name = $data['name'];
    $description = $data['description'];
    $createdAt = $data['created_at'];
    $createdBy = $data['created_by'];

    // Connect to Firebase
    $database = Database::getInstance();

    // Update the event record in Firebase under 'events' collection
    $eventRef = $database->getReference('events/' . $eventId);
    $eventRef->update([
        'name' => $name,
        'description' => $description,
        'created_at' => $createdAt,
        'created_by' => $createdBy
    ]);

    // Return success response
    echo json_encode([
        "status" => "success",
        "message" => "Event updated successfully."
    ]);
} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
