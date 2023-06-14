<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function showAboutUs()
    {
        return Inertia::render('Generics/About');
    }

    public function showReturnPolicy()
    {
        return Inertia::render('Generics/ReturnPolicy');
    }

    public function showTermsAndConditions()
    {
        return Inertia::render('Generics/TermsAndConditions');
    }

    public function showContactUs()
    {
        return Inertia::render('Generics/ContactUs');
    }
}
