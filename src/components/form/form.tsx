import React from 'react';

interface Form {
    action: (formData: FormData) => void,
    children: React.ReactNode
}

const Form: React.FC<Form> = ({ action, children }) => {
    return (
        <form action={''}>
            { children }
        </form>
    );
};

export default Form;