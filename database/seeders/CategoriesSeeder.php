<?php

namespace Database\Seeders;

use App\Models\Categories;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Categories::create([
            'name' => 'gaming'
        ]);

        Categories::create([
            'name' => 'office'
        ]);

        Categories::create([
            'name' => 'rocking'
        ]);

        Categories::create([
            'name' => 'stool'
        ]);

        Categories::create([
            'name' => 'dining'
        ]);
    }
}
