import { useState, useEffect, useRef } from "react";
import type { SelectOption } from "../ui/select/select.type";

interface UseSelectProps {
    options: SelectOption[];
    multiple: boolean;
    limit: number;
    disabled: boolean;
}

export const useSelect = ({ options, multiple, limit, disabled }: UseSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [focusedIndex, setFocusedIndex] = useState(-1);
    
    const selectRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const listItemsRef = useRef<(HTMLLIElement | null)[]>([]);

    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setFocusedIndex(-1);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        if (isOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isOpen]);

    return {
        isOpen,
        setIsOpen,
        search,
        setSearch,
        focusedIndex,
        setFocusedIndex,
        filteredOptions,
        selectRef,
        searchInputRef,
        listItemsRef,
        disabled,
    };
};