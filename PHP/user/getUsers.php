<?php
header("Content-Type: application/json");

require_once __DIR__ . '/../core/Database.php';

try {
    $database = Database::getInstance();

    $usersRef = $database->getReference('users');
    $usersSnapshot = $usersRef->getSnapshot();
    $users = $usersSnapshot->exists() ? $usersSnapshot->getValue() : [];

    echo json_encode([
        "status" => "success",
        "users" => $users
    ]);
} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
