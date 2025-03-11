export interface SelectOption {
    label: string;
    value: string;
    url?: string | number;
}

export interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    label: string;
    options: SelectOption[];
    multiple?: boolean;
    placeholder?: string;
    required?: boolean;
    error?: string | null;
    disabled?: boolean;
    limit?: number;
    rules?: Record<string, any>;
}
