import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
    cross?: boolean;
    bgColor?: string;
    color?: string;
    className?: string;
}

const Badge: React.FC<BadgeProps> = ({ 
    value, 
    cross = false, 
    bgColor = 'bg-gray-100',
    color = 'text-gray-800',
    className = '', 
    ...rest 
}) => {
    return (
        <div 
            className={`px-[10px] flex items-center justify-between gap-1 py-1 text-xs font-semibold leading-5 rounded-full ${bgColor} ${color} ${className}`}
            {...rest}
        >
            { value }
            {cross && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            )}
        </div>
    );
};

export default Badge;
