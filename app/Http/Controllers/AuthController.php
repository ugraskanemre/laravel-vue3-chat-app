<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    /**
     * Kullanıcıyı kaydet
     */
    public function register(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|confirmed|min:8',
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        return response()->json(['message' => 'Kullanıcı başarıyla kaydedildi'], 201);
    }

    /**
     * Kullanıcıyı giriş yap
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials)) {
            throw ValidationException::withMessages([
                'email' => ['Bu email ve şifre kombinasyonu geçersiz.'],
            ]);
        }

        $user = Auth::user();
        $token = $user->createToken('LaravelAuthApp')->plainTextToken;

        return response()->json(['token' => $token]);
    }

    /**
     * Kullanıcıyı çıkış yap
     */
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Çıkış yapıldı']);
    }

    /**
     * Şu anki kullanıcıyı al
     */
    public function user(Request $request)
    {
        return response()->json($request->user());
    }
}
