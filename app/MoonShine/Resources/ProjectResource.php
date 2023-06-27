<?php

namespace App\MoonShine\Resources;

use Illuminate\Database\Eloquent\Model;
use App\Models\Project;

use MoonShine\Decorations\Block;
use MoonShine\Decorations\Column;
use MoonShine\Decorations\Grid;
use MoonShine\Fields\BelongsTo;
use MoonShine\Fields\Checkbox;
use MoonShine\Fields\HasMany;
use MoonShine\Fields\Image;
use MoonShine\Fields\Text;
use MoonShine\Fields\Textarea;
use MoonShine\Resources\Resource;
use MoonShine\Fields\ID;
use MoonShine\Actions\FiltersAction;

class ProjectResource extends Resource
{
    public static string $model = Project::class;

    public static string $title = 'Проекты';

    public string $titleField = 'title';

    public static array $with = [
        'prices',
    ];

    public function fields(): array
    {
        return [
            ID::make()->sortable(),

            Grid::make([
                Column::make([
                    Block::make([
                        Text::make('Название проекта', 'title')
                            ->sortable()
                            ->required(),
                        BelongsTo::make('Тип дома', 'category')
                            ->sortable(),
                        BelongsTo::make('Участвует в акции', 'deal', 'title')
                            ->sortable()
                            ->nullable(),
                        Image::make('Изображения дома', 'images')
                            ->removable()
                            ->multiple()
                            ->disk('public')
                            ->dir('images/houses')
                            ->hideOnIndex(),
                    ]),

                    Block::make([
                        Text::make('Площадь', 's')
                            ->required()
                            ->hideOnIndex(),
                        Text::make('Ширина', 'width')
                            ->required()
                            ->hideOnIndex(),
                        Text::make('Длина', 'height')
                            ->required()
                            ->hideOnIndex(),
                        Text::make('Количество этажей', 'floor')
                            ->required()
                            ->hideOnIndex(),
                        Text::make('Количество спален', 'bedroom')
                            ->required()
                            ->hideOnIndex(),
                        Text::make('Количество санузлов', 'bathroom')
                            ->required()
                            ->hideOnIndex(),
                        Checkbox::make('Мансарда', 'mansarda')
                            ->hideOnIndex(),

                    ]),
                    Block::make([
                        Text::make('Цена от', 'minprice')
                            ->required()
                            ->hideOnIndex(),
                        Text::make('Строк строительства', 'construction_period')
                            ->required()
                            ->hideOnIndex(),
                        Text::make('Размеры в плане', 'size_on_plan')
                            ->required()
                            ->hideOnIndex(),
                    ]),

                    Block::make([
                        Textarea::make('Под ключ', 'full_construction')
                            ->required()
                            ->hideOnIndex(),
                        Textarea::make('Без отделки', 'without_finishing')
                            ->required()
                            ->hideOnIndex(),
                    ]),

                    HasMany::make('Цены', 'prices')
                        ->resourceMode()
                        ->hideOnIndex()
                        ->removable(),


                ])
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
