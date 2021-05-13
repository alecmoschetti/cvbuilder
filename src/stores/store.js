import { writable } from 'svelte/store';

export const general = writable({
    name: '',
    title: '',
    email: '',
    phone: ''
});
export const workArray = writable([]);
export const edArray = writable([]);