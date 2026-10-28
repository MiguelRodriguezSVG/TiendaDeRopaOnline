@extends('layouts.base')

@section('title', 'Juguetería El Trompo')

@section('content')

    <h2>Lista de juguetes</h2>

    <p>
        Bienvenidos a Juguetería El Trompo, donde encontrarás
        juguetes para divertirte y compartir momentos especiales.
    </p>

    <p>Hay {{ count($juguetes) }} juguetes en el estante.</p>

    <a href="/juguetes/nuevo">Registrar nuevo juguete</a>

    <h3>Juguetes disponibles</h3>

    @foreach ($juguetes as $juguete)
        <div>
            <p>Nombre: {{ $juguete->nombre }}</p>
            <p>Precio: Bs {{ $juguete->precio }}</p>
        </div>
        <hr>
    @endforeach

    <p>Estante atendido por Miguel Eduardo Rodriguez Rocha</p>

@endsection