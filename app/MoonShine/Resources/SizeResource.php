<?php

namespace App\MoonShine\Resources;

use Illuminate\Database\Eloquent\Model;
use App\Models\Size;

use MoonShine\Decorations\Block;
use MoonShine\Decorations\Column;
use MoonShine\Decorations\Grid;
use MoonShine\Fields\Checkbox;
use MoonShine\Fields\Text;
use MoonShine\Resources\Resource;
use MoonShine\Fields\ID;
use MoonShine\Actions\FiltersAction;

class SizeResource extends Resource
{
    public static string $model = Size::class;

    public static string $title = 'Размеры для цен';

    public function fields(): array
    {
        return [
            ID::make()->sortable(),

            Grid::make([
                Column::make([
                    Block::make([
                        Text::make('Название размера', 'title')
                            ->sortable()
                            ->required(),
                        Checkbox::make('Под ключ', 'is_full_price')
                    ]),
                ]),
            ]),
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
