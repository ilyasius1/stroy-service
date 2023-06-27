<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function store(OrderRequest $request)
    {
        $order = Order::create($request->validated());

        return $order;
    }
}
