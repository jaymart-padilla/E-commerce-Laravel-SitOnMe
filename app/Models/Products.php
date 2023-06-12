<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;

    protected $guarded = "";

    public function scopeQueryFilter($query, array $filters)
    {
        // search for product category
        $query->when($filters['category'] ?? false, function ($q, $category) {
            return $q->where('category_id', '=', (int) $category);
        });

        // search loosely product's for name and description
        $query->when($filters['search'] ?? false, function ($q, $search) {
            return $q->where(function ($q) use ($search) {
                $q->where('name', 'like', '%' . $search . '%')
                    ->orWhere('description', 'like', '%' . $search . '%');
            });
        });

        // filter price range
        $query->when($filters['min'] ?? false, function ($q, $min) {
            return $q->where('price', '>=', (int) $min);
        });

        $query->when($filters['max'] ?? false, function ($q, $max) {
            return $q->where('price', '<=', (int) $max);
        });

        // sort by update_at
        $query->when($filters['sort'] ?? false, function ($q, $sort) {
            if (strtolower($sort) === "latest") {
                return $q->latest('created_at');
            }
        });
    }


    public function category()
    {
        return $this->belongsTo(Categories::class, 'category_id');
    }

    public function cartItems()
    {
        return $this->hasMany(CartItems::class, 'product_id');
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItems::class, 'product_id');
    }
}
