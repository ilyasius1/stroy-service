<?php

namespace App\Providers;

use App\MoonShine\Resources\CallResource;
use App\MoonShine\Resources\CategoryResource;
use App\MoonShine\Resources\DealResource;
use App\MoonShine\Resources\OrderResource;
use App\MoonShine\Resources\PriceResource;
use App\MoonShine\Resources\ProjectResource;
use App\MoonShine\Resources\SizeResource;
use Illuminate\Support\ServiceProvider;
use MoonShine\MoonShine;
use MoonShine\Menu\MenuGroup;
use MoonShine\Menu\MenuItem;
use MoonShine\Resources\MoonShineUserResource;
use MoonShine\Resources\MoonShineUserRoleResource;

class MoonShineServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        app(MoonShine::class)->menu([
            MenuGroup::make('moonshine::ui.resource.system', [
                MenuItem::make('moonshine::ui.resource.admins_title', new MoonShineUserResource())
                    ->translatable()
                    ->icon('users'),
                MenuItem::make('moonshine::ui.resource.role_title', new MoonShineUserRoleResource())
                    ->translatable()
                    ->icon('bookmark'),
            ])->translatable(),

//            MenuItem::make('Documentation', 'https://laravel.com')
//                ->badge(fn() => 'Check'),
            MenuItem::make('Типы домов', new CategoryResource())
                ->icon('heroicons.adjustments-horizontal'),
            MenuItem::make('Проекты домов', new ProjectResource())
                ->icon('heroicons.home-modern'),
            MenuItem::make('Размеры для цен', new SizeResource())
                ->icon('heroicons.rectangle-group'),
            MenuItem::make('Цены', new PriceResource())
                ->icon('heroicons.banknotes'),
            MenuItem::make('Акции', new DealResource())
                ->icon('heroicons.megaphone'),
            MenuItem::make('Звонки', new CallResource())
                ->icon('heroicons.phone-arrow-down-left'),
            MenuItem::make('Заказы', new OrderResource())
                ->icon('heroicons.chat-bubble-left-ellipsis'),
        ]);
    }
}
