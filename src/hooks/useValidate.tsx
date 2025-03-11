import { useState, useEffect } from 'react';

export interface ValidationError {
    message: string;
}

type ValidationFunction = (value: string) => string | null;

const useValidate = (
    validationFn: ValidationFunction,
    initialValue: string = ''
): [string, React.Dispatch<React.SetStateAction<string>>, ValidationError | null] => {
    const [text, setText] = useState<string>(initialValue);
    const [error, setError] = useState<ValidationError | null>(null);

    useEffect(() => {
        const errorMessage = validationFn(text);
        setError(errorMessage ? { message: errorMessage } : null);
    }, [text, validationFn]);

    return [text, setText, error];
};

export default useValidate;