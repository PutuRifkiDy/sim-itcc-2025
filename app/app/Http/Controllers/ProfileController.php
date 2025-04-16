<?php
namespace App\Http\Controllers;

use App\Enums\UserStatus;
use App\Http\Requests\ProfileUpdateRequest;
use App\Traits\HasFile;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    use HasFile;
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status'          => session('status'),
            'status_students' => UserStatus::options(),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        // dd($request->all());
        $user = $request->user();

        // ambil data validasi profile
        $user->fill($request->validated());

        // Mengupdate file kalo ada
        $institutionPath = $this->update_file($request, $user, 'institution_path', 'institutions');

        // Jika ada file baru, update kolom institution_path
        if ($institutionPath) {
            $user->institution_path = $institutionPath;
        }

        if ($user->isDirty('email')) {
            $user->email_verified_at = null;
        }

        $user->already_filled = true;

        if ($user->save()) {
            flashMessage('Your profile has been updated.', 'success');
        } else {
            flashMessage('Your profile could not be updated.', 'danger');
        }

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        flashMessage('Your account has been deleted.', 'success');
        return back();
    }
}
