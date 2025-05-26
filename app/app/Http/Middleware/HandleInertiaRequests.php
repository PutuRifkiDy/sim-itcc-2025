<?php
namespace App\Http\Middleware;

use App\Http\Resources\EventRegistrationResource;
use App\Http\Resources\MerchandiseResource;
use App\Http\Resources\NavbarResource;
use App\Http\Resources\UserSingleResource;
use App\Models\Competitions;
use App\Models\Merchandise;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
             ...parent::share($request),
            'auth'          => [
                'user' => fn() => $request->user() ? new UserSingleResource($request->user()) : null ,
            ],
            'flash_message' => fn() => [
                'type' => $request->session()->get('type'),
                'message' => $request->session()->get('message'),
            ],

            'competitions'  => fn()  =>  NavbarResource::collection(
                Competitions::get()
            ),

            'merchandise' => fn() => MerchandiseResource::collection(
                Merchandise::select('name', 'slug', 'price', 'image_path', 'description', 'batch_name', 'start_date', 'end_date')->get()
            ),

            'ziggy'         => fn()         => [
                 ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
        ];
    }
}
