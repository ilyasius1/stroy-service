<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    //
    public function index()
    {
        $categories = Category::query()->get();
        return CategoryResource::collection($categories);
    }

    public function getById($id)
    {
        $category = Category::query()->where('id', $id)->get();
        return CategoryResource::collection($category);
    }
}
