<?php

namespace App\Http\Controllers;

use Event;
use Illuminate\Http\Request;
use App\Exports\EventRegistrationsExport;
use Maatwebsite\Excel\Facades\Excel;

class ExportController extends Controller
{
    public function export(Request $request)
    {
        $filters = [
            'search' => $request->search,
        ];
        return Excel::download(new EventRegistrationsExport($filters), 'event_registrations.csv');    }
}
