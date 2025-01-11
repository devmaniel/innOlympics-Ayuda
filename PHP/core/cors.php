<?php
    $allowed_origin = "http://localhost:5173"; // Change to your frontend origin
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';

    if ($origin === $allowed_origin) {
        header("Access-Control-Allow-Origin: $origin");
        header("Access-Control-Allow-Credentials: true");
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");

        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            http_response_code(200);
            exit;
        }
    }
?>
