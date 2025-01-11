<?php
require __DIR__.'/../vendor/autoload.php';

use Kreait\Firebase\Factory;

class Database {
    private static $instance = null;
    private $database;
    
    private function __construct() {
        $factory = (new Factory)
            ->withServiceAccount(__DIR__.'/fir-php-4f8d7-firebase-adminsdk-ceqpu-a14fc5fc09.json')
            ->withDatabaseUri('https://fir-php-4f8d7-default-rtdb.firebaseio.com/');
        
        $this->database = $factory->createDatabase();
    }
    
    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance->database;
    }
    
    // Prevent cloning of the instance
    private function __clone() {}
    
    // Changed from private to public to comply with PHP 8.0+ requirements
    public function __wakeup() {
        throw new \Exception("Cannot unserialize singleton");
    }
}