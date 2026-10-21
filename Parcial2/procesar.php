<?php
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $mascota = $_POST["mascota"];

    echo "<h2>Turno reservado en Veterinaria Patitas</h2>";

    echo "<p>Nombre completo: $nombre</p>";
    echo "<p>Correo: $correo</p>";
    echo "<p>Informacion mascota: $mascota</p>";

    echo "<p>Te atiende Miguel Eduardo Rodriguez Rocha</p>";
?>