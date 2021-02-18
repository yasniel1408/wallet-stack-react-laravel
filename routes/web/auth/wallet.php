<?php
use Illuminate\Support\Facades\Route;


Route::get('/wallet', function () {
    return view('wallet');
});