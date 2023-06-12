<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::create([
            'name' => "Head Admin",
            'address' => 'Bolaney, Alaminos City, Pangasinan',
            'email' => 'SitOnMe@gmail',
            'email_verified_at' => now(),
            'password' => bcrypt('123123123'),
            'privilege' => 'admin',
        ]);

        \App\Models\User::create([
            'name' => "Lorem Ipsum",
            'address' => 'Bolaney, Alaminos City, Pangasinan',
            'email' => 'lorem@gmail.com',
            'email_verified_at' => now(),
            'password' => bcrypt('123123123'),
            'privilege' => 'user',
        ]);

        $this->call(CategoriesSeeder::class);
        $this->call(PaymentMethodsSeeder::class);
        $this->call(ProductsSeeder::class);
    }
}
