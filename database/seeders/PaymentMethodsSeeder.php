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
        PaymentMethods::create([
            'name' => 'Cash on Delivery',
            'description' => "'Cash on Delivery' is a payment method that allows customers to pay for their purchases upon delivery, usually in cash, making it a convenient option for those who prefer not to pay online or in advance."
        ]);
    }
}
