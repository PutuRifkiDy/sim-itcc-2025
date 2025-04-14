<?php
namespace App\Http\Requests;

use App\Enums\UserStatus;
use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Enum;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'             => ['required', 'string', 'max:255'],
            'email'            => [
                'required',
                'string',
                'lowercase',
                'email',
                'max:255',
                Rule::unique(User::class)->ignore($this->user()->id),
            ],
            'phone_number'     => ['required', 'string', 'max:15'],
            'address'          => ['required', 'string', 'max:255'],
            'line_id'          => ['required', 'string', 'max:255'],
            'institution'      => ['required', 'string', 'max:255'],
            'institution_path' => [
                Rule::when(
                    empty($this->user()->institution_path),
                    ['required', 'mimes:png,jpg', 'max:2048'],
                    ['nullable', 'mimes:png,jpg', 'max:2048']
                ),
            ],
            'status'           => ['required', new Enum(UserStatus::class)],
            'already_filled'   => ['nullable', 'boolean'],
        ];
    }

    public function attributes()
    {
        return [
            'name'             => 'Name',
            'email'            => 'Email',
            'phone_number'     => 'Phone Number',
            'address'          => 'Address',
            'line_id'          => 'Line ID',
            // 'birthdate' => 'Birthdate',
            'institution'      => 'Institution',
            'institution_path' => 'Institution Path',
            'status'           => 'Status',
        ];
    }
}
