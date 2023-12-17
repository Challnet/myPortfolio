<?php
// Это ваш PHP-код, который возвращает ассоциативный массив

$peopleData = array(
   array(
       'name' => 'John Doe',
       'age' => 25,
       'city' => 'Example City',
   ),
   array(
       'name' => 'Jane Smith',
       'age' => 30,
       'city' => 'Another City',
   ),
   array(
       'name' => 'Bob Johnson',
       'age' => 22,
       'city' => 'Yet Another City',
   ),
   array(
       'name' => 'Alice Brown',
       'age' => 28,
       'city' => 'City XYZ',
   ),
   array(
       'name' => 'Charlie Davis',
       'age' => 35,
       'city' => 'City ABC',
   ),
);

// Преобразовываем массив в формат JSON
$jsonData = json_encode($peopleData);

// Выводим JSON-данные
header('Content-Type: application/json');
echo $jsonData;
?>
