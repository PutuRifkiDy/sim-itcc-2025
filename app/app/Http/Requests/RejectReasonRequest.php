<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RejectReasonRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'reject_reason' => ['required', 'string', 'max:255'],
        ];
    }

    public function attributes()
    {
        return [
            'reject_reason' => 'Reject Reason',
        ];
    }
}
