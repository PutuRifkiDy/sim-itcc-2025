<?php

namespace App\Http\Controllers;

use App\Exports\CompetitionParticipantExport;
use App\Exports\CompetitionRegistrationsExport;
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
        return Excel::download(new EventRegistrationsExport($filters), 'event_registrations.csv');
    }

    public function export_competition(Request $request)
    {
        $filters = [
            'search' => $request->search,
        ];

        return Excel::download(new CompetitionRegistrationsExport($filters), 'competition_registrations.csv');
    }

    public function export_competition_participant(Request $request)
    {
        $filters = [
            'search' => $request->search,
        ];

        return Excel::download(new CompetitionParticipantExport($filters), 'competition_participants.csv');
    }
}
