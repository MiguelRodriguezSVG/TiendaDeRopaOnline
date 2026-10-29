<?php


use Illuminate\Support\Facades\Route;
use App\Models\Juguete;

Route::get('/', function () {
    return view('inicio');
})->name('inicio');

Route::get('/contacto', function () {
    return view('contacto');
})->name('contacto');

Route::get('/juguetes', function () {
    $juguetes = Juguete::all();

    return view('juguetes.index', compact('juguetes'));
});

Route::get('/juguetes/nuevo', function () {
    return view('juguetes.nuevo');
});

Route::post('/juguetes/nuevo', function () {

    request()->validate(
        [
            'nombre' => 'required',
            'precio' => 'required|integer',
            'stock' => 'required|integer|min:0',
        ],
        [
            'nombre.required' => 'Pone el nombre del juguete.',
            'precio.required' => 'Pone el precio del juguete.',
            'precio.integer' => 'Aca el precio va entero, sin decimales ni letras.',
            'stock.required' => 'Pone la cantidad de juguetes disponibles.',
            'stock.integer' => 'El stock debe ser un numero entero.',
            'stock.min' => 'El stock no puede ser negativo.',
        ]
    );

    Juguete::create([
        'nombre' => request()->input('nombre'),
        'precio' => request()->input('precio'),
        'stock' => request()->input('stock'),
    ]);

    return redirect('/juguetes');
});