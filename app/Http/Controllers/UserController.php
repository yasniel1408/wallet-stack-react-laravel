<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserController extends Controller
{
    public function store(Request $request){
        $input = $request->all();
        $input['password'] = Hash::make($request->password);

        User::create($input);
        return response()->json([
            'res' => true,
            'message' => "User created successfully"
        ], 200);
    }

    public function login(Request $request){
        $user = User::whereEmail($request->email)->first();

        if(!is_null($user) && Hash::check($request->password, $user->password)){
            $user->api_token = Str::random(100);
            $user->save();

            return redirect()->route('/wallet');
        }else{
            return response()->json([
                'res' => false,
                'message' => "Incorrect email or password"
            ], 200);
        }

     }
}
