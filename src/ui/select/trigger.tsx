import React from "react";
import { SelectOption } from "./select.type";
import Badge from "../badge/badge";

interface SelectTriggerProps {
    value: SelectOption[];
    placeholder: string;
    isOpen: boolean;
    disabled: boolean;
    toggleOpen: () => void;
    onSelect: (option: SelectOption) => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
}

export const SelectTrigger: React.FC<SelectTriggerProps> = ({
    value,
    placeholder,
    isOpen,
    disabled,
    toggleOpen,
    onSelect,
    onKeyDown,
}) => {
    const baseStyles = "w-full p-2 border rounded-[8px] mt-1 focus:outline-none flex items-center justify-between cursor-pointer";
    const stateStyles = disabled 
        ? "border-gray-300 bg-gray-100 cursor-not-allowed" 
        : "border-gray-300 hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200";

    return (
        <div
            role="combobox"
            aria-expanded={isOpen}
            tabIndex={0}
            className={`${baseStyles} ${stateStyles} overflow-auto`}
            onClick={!disabled ? toggleOpen : undefined}
            onKeyDown={onKeyDown}
        >
            {value.length ? (
                <div className="flex gap-1">
                    {value.map((option) => (
                        <Badge 
                            key={option.value} 
                            value={option.value} 
                            onClick={() => onSelect(option)} 
                            cross
                        />
                    ))}
                </div>
            ) : (
                <span className="text-gray-500">{placeholder}</span>
            )}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </div>
    );
};