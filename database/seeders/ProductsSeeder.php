<?php

namespace Database\Seeders;

use App\Models\Products;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Products::create([
            'category_id' => 1,
            'name' => 'Bukkororii',
            'description' => 'The ultimate gaming chair for your ultimate gaming experience.',
            'image' => '/images/chairs/gamingchair1.jpg',
            'price' => 299.99,
            'stock' => 17,
        ]);

        Products::create([
            'category_id' => 1,
            'name' => 'Chunchunmaru',
            'description' => 'The perfect chair for every gamer, whether for casual or competitive gaming.',
            'image' => '/images/chairs/gamingchair2.jpg',
            'price' => 199.99,
            'stock' => 100,
        ]);

        Products::create([
            'category_id' => 2,
            'name' => 'Komeko',
            'description' => 'The best chair for your office needs, with ergonomic design and adjustable features.',
            'image' => '/images/chairs/officechair1.jpg',
            'price' => 249.99,
            'stock' => 75,
        ]);

        Products::create([
            'category_id' => 2,
            'name' => 'Chomusuke',
            'description' => 'An office chair that combines comfort and style, perfect for long hours of work.',
            'image' => '/images/chairs/officechair2.jpg',
            'price' => 179.99,
            'stock' => 120,
        ]);

        Products::create([
            'category_id' => 3,
            'name' => 'Dodonko',
            'description' => 'A modern take on the classic rocking chair, perfect for your outdoor space.',
            'image' => '/images/chairs/rockingchair1.jpg',
            'price' => 149.99,
            'stock' => 40,
        ]);

        Products::create([
            'category_id' => 4,
            'name' => 'Wiz',
            'description' => 'A sleek and versatile stool that can fit any space, with a swivel base for added convenience.',
            'image' => '/images/chairs/stoolchair1.jpg',
            'price' => 69.99,
            'stock' => 69,
        ]);

        Products::create([
            'category_id' => 5,
            'name' => 'Hyoizaaburo',
            'description' => 'A luxurious dining chair with comfortable cushion and elegant design, perfect for any dining room.',
            'image' => '/images/chairs/diningchair1.jpg',
            'price' => 149.99,
            'stock' => 60,
        ]);
    }
}
