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

export function flashMessage(params){
    return params.props.flash_message;
}
