<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'address',
        'email',
        'password',
        'privilege'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function cartItems()
    {
        return $this->hasMany(CartItems::class, 'user_id');
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItems::class, 'user_id');
    }

    public function payments()
    {
        return $this->hasMany(Payments::class, 'user_id');
    }

    public function scopeQueryFilter($query, array $filters)
    {
        // search loosely user's for name
        $query->when($filters['search'] ?? false, function ($q, $search) {
            return $q->where(function ($q) use ($search) {
                $q->where('name', 'like', '%' . $search . '%')->orWhere('address', 'like', '%' . $search . '%');
            });
        });
    }
}
