<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        

        $users = User::where('id', '!=', Auth::id())
            ->with('lastMessage')
            ->get();

        return view('dashboard', compact('users'));
    }
}
