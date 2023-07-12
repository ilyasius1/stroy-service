<?php

namespace App\MoonShine\Resources;

use Illuminate\Database\Eloquent\Model;
use App\Models\Category;

use MoonShine\Decorations\Block;
use MoonShine\Decorations\Column;
use MoonShine\Decorations\Grid;
use MoonShine\Fields\Image;
use MoonShine\Fields\Text;
use MoonShine\Fields\Textarea;
use MoonShine\MoonShine;
use MoonShine\Resources\Resource;
use MoonShine\Fields\ID;
use MoonShine\Actions\FiltersAction;

class CategoryResource extends Resource
{
	public static string $model = Category::class;

	public static string $title = 'Типы домов';

    public string $titleField = 'title';

	public function fields(): array
	{
		return [
		    ID::make()->sortable(),

            Grid::make([
                Column::make([
                    Block::make([
                        Text::make('Название типа дома', 'title')
                            ->sortable()
                            ->required(),
                        Image::make('Изображения для категории', 'image')
                            ->removable()
                            ->disk('public')
                            ->dir('images/category')
                            ->hideOnIndex(),
                    ]),
                    Block::make([
                        Textarea::make('Дополнительные услуги', 'additional_services')
                            ->hideOnIndex(),
                    ]),
                ])->columnSpan(12),
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
