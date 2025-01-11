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

    // Delete the ayuda record from Firebase under 'ayuda' collection
    $ayudaRef = $database->getReference('ayuda/' . $ayudaId);
    $ayudaRef->remove();

    // Return success response
    echo json_encode([
        "status" => "success",
        "message" => "Ayuda deleted successfully."
    ]);
} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
