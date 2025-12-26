<?php

namespace App\Mail;

use App\Models\EventRegistrations;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Storage;

class TicketMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */

    public $registration;
    public function __construct(EventRegistrations $registration)
    {
        $this->registration = $registration;
    }

    // public function build()
    // {
    //     return $this->subject('Your Seminar Ticket')
    //         ->markdown('emails.ticket')
    //         ->attach(Storage::url($this->registration->ticket_path));
    // }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: "Seminar Nasional Payment Has Been Verified" ,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            markdown: 'emails.ticket',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        $path = storage_path('app/public/' . $this->registration->ticket_path);

        if (file_exists($path)) {
            return [
                \Illuminate\Mail\Mailables\Attachment::fromPath($path)
                    ->as('ticket.png')
                    ->withMime('image/png'),
            ];
        }

        return [];
    }
}
