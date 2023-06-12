<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItems extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'product_id',
        'quantity',
    ];

    // default status for the ordered items
    protected $attributes = [
        'status' => 'pending',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function products()
    {
        return $this->belongsTo(Products::class, 'product_id');
    }

    public function payment()
    {
        return $this->hasOne(Payments::class, 'order_item_id');
    }

    public function scopeQueryFilter($query, array $filters)
    {
        // search loosely order item's for name and user's name and address
        $query->when($filters['search'] ?? false, function ($q, $search) {
            return $q->where(function ($q) use ($search) {
                $q->whereHas('products', function ($q) use ($search) {
                    $q->where('name', 'like', '%' . $search . '%');
                })
                    ->orWhereHas('user', function ($q) use ($search) {
                        $q->where('name', 'like', '%' . $search . '%')
                            ->orWhere('address', 'like', '%' . $search . '%');
                    });
            });
        });

        // search by status
        $query->when(
            isset($filters['status']),
            function ($q) use ($filters) {
                $status = $filters['status'];
                return $q->where('status', $status);
            }
        );
    }
}
