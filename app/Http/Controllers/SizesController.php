<?php

namespace App\Http\Controllers;

use App\Http\Resources\SizesResource;
use App\Models\Size;
use Illuminate\Http\Request;

class SizesController extends Controller
{
    public function index()
    {
        $sizes = Size::query()->get();
        return SizesResource::collection($sizes);
    }
}
