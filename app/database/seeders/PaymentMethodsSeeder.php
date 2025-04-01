<?php

namespace Database\Seeders;

use App\Models\PaymentMethods;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PaymentMethodsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $payment_methods = [
            [
                'account_number' => '1755426067',
                'bank_name' => 'BNI',
                'recipient_name' => 'Luh Dewita Cahyani Ardiningsih',
            ],
            [
                'account_number' => '1452491360',
                'bank_name' => 'BNI',
                'recipient_name' => 'Ida Ayu Putri Widiasuari',
            ],
        ];

        foreach($payment_methods as $payment_method)
        {
            PaymentMethods::create($payment_method);
        }
    }
}
