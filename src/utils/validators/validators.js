export const requiredField = value => {
    if (value) return undefined;
    return 'Fiels is required';
}

const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined

export const maxLength15 = maxLength(15);
export const maxLength40 = maxLength(40);

/* export const maxLength30 = value => {
    if (value && value.length > 30) return 'Max length is 30 symbols.';
    return undefined;
} */