<?php
header("Content-Type: application/json");

require_once __DIR__ . '/../core/Database.php';

try {
    // Get the data from the incoming request
    $data = json_decode(file_get_contents("php://input"), true);

    // Validate the input
    if (
        !isset($data['background_img']) ||
        !isset($data['user_id']) ||
        !isset($data['event_id']) ||
        !isset($data['ayuda_description']) ||
        !isset($data['amount']) ||
        !isset($data['distribution_date']) ||
        !isset($data['distribution_by'])
    ) {
        echo json_encode([
            "status" => "error",
            "message" => "All fields (background_img, user_id, event_id, ayuda_description, amount, distribution_date, distribution_by) are required."
        ]);
        exit;
    }

    $backgroundImg = $data['background_img'];
    $userId = $data['user_id'];
    $eventId = $data['event_id'];
    $ayudaDescription = $data['ayuda_description'];
    $amount = $data['amount'];
    $distributionDate = $data['distribution_date'];
    $distributionBy = $data['distribution_by'];

    // Connect to Firebase
    $database = Database::getInstance();

    // Create a new ayuda reference in Firebase under 'ayuda' collection
    $ayudaRef = $database->getReference('ayuda')->push();
    $ayudaRef->set([
        'background_img' => $backgroundImg,
        'user_id' => $userId,
        'event_id' => $eventId,
        'ayuda_description' => $ayudaDescription,
        'amount' => $amount,
        'distribution_date' => $distributionDate,
        'distribution_by' => $distributionBy
    ]);

    // Return success response
    echo json_encode([
        "status" => "success",
        "message" => "Ayuda created successfully."
    ]);
} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
