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
                'payment_type' => 'Bank Transfer'
            ],
            [
                'account_number' => '1452491361',
                'bank_name' => 'Dana',
                'recipient_name' => 'Luh Dewita Cahyani Ardiningsih',
                'payment_type' => 'E-Wallet'
            ],
            [
                'account_number' => '1452491362',
                'bank_name' => 'Shopee Pay',
                'recipient_name' => 'Luh Dewita Cahyani Ardiningsih',
                'payment_type' => 'E-Wallet'
            ],
            [
                'account_number' => '1452491363',
                'bank_name' => 'Gopay',
                'recipient_name' => 'Luh Dewita Cahyani Ardiningsih',
                'payment_type' => 'E-Wallet'
            ],
            [
                'account_number' => '1452491364',
                'bank_name' => 'OVO',
                'recipient_name' => 'Luh Dewita Cahyani Ardiningsih',
                'payment_type' => 'E-Wallet'
            ],
        ];

        foreach($payment_methods as $payment_method)
        {
            PaymentMethods::create($payment_method);
        }
    }
}
