<?php

namespace App\MoonShine\Resources;

use Illuminate\Database\Eloquent\Model;
use App\Models\Price;

use MoonShine\Decorations\Block;
use MoonShine\Fields\BelongsTo;
use MoonShine\Fields\Text;
use MoonShine\Resources\Resource;
use MoonShine\Fields\ID;
use MoonShine\Actions\FiltersAction;

class PriceResource extends Resource
{
	public static string $model = Price::class;

    public static string $title = 'Цены';

	public function fields(): array
	{
		return [
            Block::make([
                ID::make()->sortable(),
                BelongsTo::make('Проект', 'project'),
                BelongsTo::make('Размер', 'size', resource: function ($size) {
                    if($size->getAttributes()['is_full_price']) {
                        return $size->getAttributes()['title'] . ' (под ключ)';
                    } else {
                        return $size->getAttributes()['title'] . ' (без отделки)';
                    }
                }           ),
//                BelongsTo::make('Под ключ', 'size', 'is_full_price'),
                Text::make('Цена', 'price'),
            ])
        ];
	}

	public function rules(Model $item): array
	{
	    return [];
    }

    public function search(): array
    {
        return ['id'];
    }

    public function filters(): array
    {
        return [];
    }

    public function actions(): array
    {
        return [
            FiltersAction::make(trans('moonshine::ui.filters')),
        ];
    }
}
