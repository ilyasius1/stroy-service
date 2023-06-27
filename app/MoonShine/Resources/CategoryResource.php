<?php

namespace App\MoonShine\Resources;

use Illuminate\Database\Eloquent\Model;
use App\Models\Category;

use MoonShine\Decorations\Block;
use MoonShine\Decorations\Column;
use MoonShine\Decorations\Grid;
use MoonShine\Fields\Image;
use MoonShine\Fields\Text;
use MoonShine\MoonShine;
use MoonShine\Resources\Resource;
use MoonShine\Fields\ID;
use MoonShine\Actions\FiltersAction;

class CategoryResource extends Resource
{
	public static string $model = Category::class;

	public static string $title = 'Типы домов';

    public string $titleField = 'title';

    protected bool $editInModal = true;
    protected bool $createInModal = true;

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
                ])->columnSpan(6)
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
