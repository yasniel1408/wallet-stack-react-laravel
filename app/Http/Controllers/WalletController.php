<?php

namespace App\Http\Controllers;

use App\Wallet;
use Illuminate\Http\Request;

class WalletController extends Controller
{

    public function __construct()
    {
//        $this->middleware('auth');
    }

    public function index()
    {
        $wallet = Wallet::firstOrFail();
        return response()->json($wallet->load('transfers'), 200);
    }


    public function wallet()
    {
        return view("wallet");
    }

}
