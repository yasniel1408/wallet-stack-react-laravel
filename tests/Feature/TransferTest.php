<?php

namespace Tests\Feature;

use App\Transfer;
use App\Wallet;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class TransferTest extends TestCase
{
//    use RefreshDatabase;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testPostTransfer()
    {
        $wallet = factory(Wallet::class)->create();
        $transfer = factory(Transfer::class)->make();

        $response = $this->json("POST", '/api/transfer', [
            'description' => $transfer->description ,
            'amount' => $transfer->amount,
            'wallet_id' => $wallet->id
        ]);

        $response->assertJsonStructure([
           'id', 'description', 'amount', 'wallet_id'
        ])->assertStatus(201);

        $this->assertDatabaseHas('transfer',[
            'description' => $transfer->description ,
            'amount' => $transfer->amount,
            'wallet_id' => $wallet->id
        ]);

        $this->assertDatabaseHas('transfer',[
            'id' => $wallet->id ,
            'money' => $wallet->money + $transfer->amount
        ]);
    }
}
