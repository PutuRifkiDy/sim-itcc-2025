<?php
namespace Database\Seeders;

use App\Models\PaymentMethods;
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
                'account_number' => '1852352365',
                'bank_name'      => 'BNI',
                'recipient_name' => 'a.n Ni Made Rita Mutiara Dewi',
                'event_type'     => 'competitions',
                'payment_type'   => 'Bank Transfer',
            ],
            [
                'account_number' => '087832590628',
                'bank_name'      => 'Dana',
                'recipient_name' => 'Ni Made Rita Mutiara Dewi',
                'event_type'     => 'competitions',
                'payment_type'   => 'E-Wallet',
            ],
            [
                'account_number' => '087832590628',
                'bank_name'      => 'Shopee Pay',
                'recipient_name' => 'ritamutiara_',
                'event_type'     => 'competitions',
                'payment_type'   => 'E-Wallet',
            ],
            [
                'account_number' => '087832590628',
                'bank_name'      => 'Gopay',
                'recipient_name' => 'Ni Made Rita Mutiara Dewi',
                'event_type'     => 'competitions',
                'payment_type'   => 'E-Wallet',
            ],
            [
                'account_number' => '087832590628',
                'bank_name'      => 'OVO',
                'recipient_name' => 'Ni Made Rita Mutiara Dewi',
                'event_type'     => 'competitions',
                'payment_type'   => 'E-Wallet',
            ],
            [
                'account_number' => '1755426067',
                'bank_name'      => 'BNI',
                'recipient_name' => 'a.n Luh Dewita Cahyani Ardiningsih',
                'event_type'     => 'semnas',
                'payment_type'   => 'Bank Transfer',
            ],
            [
                'account_number' => '081999039531',
                'bank_name'      => 'Dana',
                'recipient_name' => 'a.n Luh Dewita Cahyani Ardiningsih',
                'event_type'     => 'semnas',
                'payment_type'   => 'E-Wallet',
            ],
            [
                'account_number' => '081999039531',
                'bank_name'      => 'Shopee Pay',
                'recipient_name' => 'a.n Luh Dewita Cahyani Ardiningsih',
                'event_type'     => 'semnas',
                'payment_type'   => 'E-Wallet',
            ],
            [
                'account_number' => '081999039531',
                'bank_name'      => 'Gopay',
                'recipient_name' => 'a.n Luh Dewita Cahyani Ardiningsih',
                'event_type'     => 'semnas',
                'payment_type'   => 'E-Wallet',
            ],
            [
                'account_number' => '081999039531',
                'bank_name'      => 'Ovo',
                'recipient_name' => 'a.n Luh Dewita Cahyani Ardiningsih',
                'event_type'     => 'semnas',
                'payment_type'   => 'E-Wallet',
            ],
        ];

        foreach ($payment_methods as $payment_method) {
            PaymentMethods::create($payment_method);
        }
    }
}
