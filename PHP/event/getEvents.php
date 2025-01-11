<?php
header("Content-Type: application/json");

require_once __DIR__ . '/../core/Database.php';

try {
    // Connect to Firebase
    $database = Database::getInstance();

    // Fetch all events from Firebase under 'events' collection
    $eventsRef = $database->getReference('events');
    $events = $eventsRef->getValue();

    if ($events) {
        echo json_encode([
            "status" => "success",
            "data" => $events
        ]);
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "No events found."
        ]);
    }
} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
