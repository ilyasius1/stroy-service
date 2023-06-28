<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectIndexResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'idCategory' => $this->category_id,
            'projectName' => $this->title,
            'imgSrc' => asset($this->images->isNotEmpty() ? "storage/" . $this->images[0] : ''),
            's' => $this->s,
            'size'=> [
                'width' =>  $this->width,
                'height' => $this->height
            ],
            'bedroom' => $this->bedroom,
            'bathroom' => $this->bathroom,
            'minprice' => floatval($this->minprice),
        ];
    }
}
