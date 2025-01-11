<?php
header("Content-Type: application/json");

require_once __DIR__ . '/../core/Database.php';

try {
    // Get the ayuda_id from the query parameter
    if (!isset($_GET['ayuda_id'])) {
        echo json_encode([
            "status" => "error",
            "message" => "Ayuda ID is required."
        ]);
        exit;
    }

    $ayudaId = $_GET['ayuda_id'];

    // Connect to Firebase
    $database = Database::getInstance();

    // Fetch the ayuda record by ID from Firebase under 'ayuda' collection
    $ayudaRef = $database->getReference('ayuda/' . $ayudaId);
    $ayuda = $ayudaRef->getValue();

    if ($ayuda) {
        echo json_encode([
            "status" => "success",
            "data" => $ayuda
        ]);
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Ayuda not found."
        ]);
    }
} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
