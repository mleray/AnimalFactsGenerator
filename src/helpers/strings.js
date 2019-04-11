// A helper for string-related functionalities

export default {
    capitalise: (value) => {
        if (typeof value !== 'string') return '';
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}