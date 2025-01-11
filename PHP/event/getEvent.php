<?php
header("Content-Type: application/json");

require_once __DIR__ . '/../core/Database.php';

try {
    // Get the event_id from the query parameter
    if (!isset($_GET['event_id'])) {
        echo json_encode([
            "status" => "error",
            "message" => "Event ID is required."
        ]);
        exit;
    }

    $eventId = $_GET['event_id'];

    // Connect to Firebase
    $database = Database::getInstance();

    // Fetch the event record by ID from Firebase under 'events' collection
    $eventRef = $database->getReference('events/' . $eventId);
    $event = $eventRef->getValue();

    if ($event) {
        echo json_encode([
            "status" => "success",
            "data" => $event
        ]);
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Event not found."
        ]);
    }
} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
