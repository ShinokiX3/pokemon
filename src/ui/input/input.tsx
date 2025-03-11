import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    placeholder?: string;
    required?: boolean;
    error?: null | string;
    disabled?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((
    { label, placeholder, error, disabled, required, ...props }, 
    ref
) => {
    const inputBase = "w-full p-2 border rounded-[8px] mt-1 focus:outline-none";
    const stateStyles = {
        default: "border-gray-300",
        hover: "hover:border-blue-500",
        focus: "focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
        filled: "border-gray-300",
        error: "border-red-500",
        disabled: "bg-gray-100 cursor-not-allowed",
    };

    const getClassName = () => {
        const classes = [
            inputBase,
            stateStyles.default,
            stateStyles.hover,
            stateStyles.focus,
            disabled && stateStyles.disabled,
            error && stateStyles.error,
        ].filter(Boolean);
      
        return classes.join(' ');
    };

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                ref={ref}
                type="input"
                placeholder={placeholder}
                disabled={disabled}
                className={getClassName()}
                {...props}
            />
            {error && <p className="mt-1 text-sm text-red-600">{ error }</p>}
            {required && !error && !disabled && (
                <p className="mt-1 text-sm text-gray-500">This information is required.</p>
            )}
        </div>
    );
});

export default Input;