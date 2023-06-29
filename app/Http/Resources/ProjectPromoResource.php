<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectPromoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $urls = $this->images->map(function ($value) {
            return asset("storage/$value");
        });
        return [
            'id' => $this->id,
            'projectName' => $this->title,
            'image' => $urls[0] ?? '',
            'percent' => $this->deal->percent
        ];
    }
}
