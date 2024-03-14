<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    // Define a method for handling the homepage
    public function index()
    {
        return 'Hello World!';
    }
}
