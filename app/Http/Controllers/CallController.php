<?php

namespace App\Http\Controllers;

use App\Http\Requests\CallRequest;
use App\Models\Call;
use Illuminate\Http\Request;

class CallController extends Controller
{
    public function store(CallRequest $request)
    {
        $call_request = Call::create($request->validated());

        return $call_request;
    }
}
