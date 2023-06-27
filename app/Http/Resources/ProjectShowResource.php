<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectShowResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        if ($this->prices) {
            $full_construction_prices = [];
            $without_finishing_prices = [];

            foreach ($this->prices as $price) {
                $size_id = $price->size_id;
                $price_value = $price->price;

                if ($price->size->is_full_price) {
                    $full_construction_prices[] = [
                        'sizeId' => $size_id,
                        'price' => $price_value,
                    ];
                } else {
                    $without_finishing_prices[] = [
                        'sizeId' => $size_id,
                        'price' => $price_value,
                    ];
                }
            }
        }

        $full_construction_details = explode("\r\n", $this->full_construction);
        $without_finishing_details = explode("\r\n", $this->without_finishing);

        return [
            'id' => $this->id,
            'idCategory' => $this->category_id,
            'projectName' => $this->title,
            'images' => $this->images,
            's' => $this->s,
            'size'=> [
                'width' =>  $this->width,
                'height' => $this->height
            ],
            'bedroom' => $this->bedroom,
            'bathroom' => $this->bathroom,
            'minprice' => floatval($this->minprice),
            'promoID' => $this->deal_id,
            'mansarda' => $this->mansarda,
            'floor' => $this->floor,
            'constructionPeriod'=>$this->construction_period,
            'sizeOnPlan' => $this->size_on_plan,
            'complects' => [
                'fullConstruction' => $full_construction_details,
                'withoutFinishing' => $without_finishing_details
            ],
            'prices' => [
                'fullConstruction' => $full_construction_prices,
                'withoutFinishing' => $without_finishing_prices,
            ],
        ];
    }
}
