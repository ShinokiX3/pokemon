export const namePattern = {
    value: /^[a-zA-Z]+$/,
    message: 'Only letters (a-z, A-Z) are allowed.'
};

export const nameValidations = {
    limitations: (value: string) => {
        if (value?.length < 2 || value?.length > 12)
            return "Must be between 2 and 12 characters long.";
    },
};

export const pokeSelectValidations = <T>(value: T[]) =>
    value.length > 0 || "At least one Pokémon must be selected.";
