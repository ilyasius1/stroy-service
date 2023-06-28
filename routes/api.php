<?php

use App\Http\Controllers\CallController;
use App\Http\Controllers\CallRequestController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SizesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::get('/get-category', [CategoryController::class, 'index']);
Route::get('/category/{category}', [CategoryController::class, 'getById']);
Route::get('/project/{category}', [ProjectController::class, 'index']);
Route::get('/house/{project}', [ProjectController::class, 'show']);
Route::get('/promo-house', [ProjectController::class, 'promoHouse']);
Route::get('/sizes', [SizesController::class, 'index']);
Route::post('/add-call', [CallController::class, 'store']);
Route::post('/add-order', [OrderController::class, 'store']);
//Route::post('/mobile-signup-view-request', [Page::class, 'mobileSignUpViewRequest']); //"Записаться на просмотр" мобильная версия
