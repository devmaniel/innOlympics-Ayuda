<?php
header("Content-Type: application/json");

require_once __DIR__ . '/../core/Database.php';

try {
    // Connect to Firebase
    $database = Database::getInstance();

    // Fetch all ayudas from Firebase under 'ayuda' collection
    $ayudasRef = $database->getReference('ayuda');
    $ayudas = $ayudasRef->getValue();

    if ($ayudas) {
        echo json_encode([
            "status" => "success",
            "data" => $ayudas
        ]);
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "No ayudas found."
        ]);
    }
} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
