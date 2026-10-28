@extends('layouts.base')

@section('title', 'Registrar juguete')

@section('content')

    <h2>Registrar nuevo juguete</h2>

    @if ($errors->any())
        <div>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form action="/juguetes/nuevo" method="POST">

        @csrf

        <div>
            <label for="nombre">Nombre del juguete:</label>
            <input
                type="text"
                id="nombre"
                name="nombre"
                value="{{ old('nombre') }}"
            >
        </div>

        <br>

        <div>
            <label for="precio">Precio en Bs:</label>
            <input
                type="number"
                id="precio"
                name="precio"
                value="{{ old('precio') }}"
            >
        </div>

        <br>

        <button type="submit">Registrar juguete</button>

    </form>

    <br>

    <a href="/juguetes">Volver a la lista</a>

@endsection