export const validateName = (value: string): string | boolean => {
	console.log(value)
    if (value.length < 2 || value.length > 12)
        return "Must be between 2 and 12 characters long.";

    if (!/^[a-zA-Z]+$/.test(value))
        return "Only letters (a-z, A-Z) are allowed.";

    return true;
};