import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const STATUS = {
    VERIFIED: 'verified',
    REQUEST: 'request',
    PENDING: 'pending',
    REJECTED: 'rejected',
};

export const STATUS_USER = {
    MAHASISWA: 'Mahasiswa',
    SMASMK: 'SMASMK',
    SMP: 'SMP',
    SD: 'SD',
    UMUM: 'Umum',
};

export function flashMessage(params) {
    return params.props.flash_message;
}

export const messages = {
    503: {
        title: 'Service Unavailable',
        description: 'Sorry, we are doing some maintenance. Please try again later.',
        status: '503'
    },
    500: {
        title: 'Server Error',
        description: 'Oops, something went wrong on our servers. Please try again later.',
        status: '500'
    },
    404: {
        title: 'Not Found',
        description: 'Sorry, the page you are looking for could not be found.',
        status: '404'
    },
    403: {
        title: 'Forbidden',
        description: 'Sorry, you are forbidden from accessing this page.',
        status: '403'
    },
    401: {
        title: 'Unauthorized',
        description: 'Sorry, you are not authorized to access this page.',
        status: '401'
    },
    429: {
        title: 'Too Many Requests',
        description: 'Please try again in just a few minutes.',
        status: '429'
    },
}
