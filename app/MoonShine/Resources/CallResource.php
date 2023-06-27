<?php

namespace App\MoonShine\Resources;

use Illuminate\Database\Eloquent\Model;
use App\Models\Call;

use MoonShine\Decorations\Block;
use MoonShine\Decorations\Column;
use MoonShine\Decorations\Grid;
use MoonShine\Fields\Checkbox;
use MoonShine\Fields\Email;
use MoonShine\Fields\Phone;
use MoonShine\Fields\Text;
use MoonShine\Fields\Textarea;
use MoonShine\Resources\Resource;
use MoonShine\Fields\ID;
use MoonShine\Actions\FiltersAction;

class CallResource extends Resource
{
	public static string $model = Call::class;

	public static string $title = 'Звонки';
    public static array $activeActions = ['show','edit','delete'];


	public function fields(): array
	{
		return [
		    ID::make()->sortable(),

            Grid::make([
                Column::make([
                    Block::make([
                        Text::make('ФИО', 'fio')
                            ->sortable(),
                        Email::make('Email', 'email')
                            ->sortable(),
                        Phone::make('Телефон', 'phone')
                            ->sortable(),
                        Textarea::make('Комментарий','comments')
                            ->sortable()
                            ->hideOnIndex(),
                        Checkbox::make('Обработан', 'is_processed')
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
