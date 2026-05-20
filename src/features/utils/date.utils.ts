export function formatDateToLong(date: string | Date, locale: 'es' | 'en' = 'en'): string {
    return new Intl.DateTimeFormat(locale === 'es' ? 'es-ES' : 'en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }).format(new Date(date))
}