import React from "react";
import Input from "../input/input";
import { SelectOption } from "./select.type";

interface SelectContentProps {
    isOpen: boolean;
    search: string;
    setSearch: (value: string) => void;
    filteredOptions: SelectOption[];
    focusedIndex: number;
    onSelect: (option: SelectOption) => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
    searchInputRef: React.RefObject<HTMLInputElement>;
    listItemsRef: React.MutableRefObject<(HTMLLIElement | null)[]>;
}

export const SelectContent: React.FC<SelectContentProps> = ({
    isOpen,
    search,
    setSearch,
    filteredOptions,
    focusedIndex,
    onSelect,
    onKeyDown,
    searchInputRef,
    listItemsRef,
}) => {
    if (!isOpen) return null;

    return (
        <div className="absolute w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 mt-1">
            <Input
                type="text"
                className="w-full p-2 border-b m-0 border-gray-300 focus:outline-none"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                ref={searchInputRef}
                onKeyDown={onKeyDown}
            />
            <ul role="listbox" className="max-h-48 overflow-auto">
                {filteredOptions.map((option, index) => (
                    <li
                        key={option.value}
                        ref={(el) => (listItemsRef.current[index] = el)}
                        role="option"
                        tabIndex={-1}
                        className={`p-2 cursor-pointer hover:bg-gray-100 focus:bg-gray-100 outline-none ${
                        focusedIndex === index ? "bg-gray-100" : ""
                        }`}
                        onClick={() => onSelect(option)}
                        onKeyDown={onKeyDown}
                    >
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};