import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { SelectOption, SelectProps } from "./select.type";
import { useSelect } from "../../hooks/useSelect";
import { SelectTrigger } from "./trigger";
import { SelectContent } from "./content";

export const Select: React.FC<SelectProps> = ({
    name,
    label,
    options,
    multiple = false,
    placeholder = "Select option...",
    required,
    error,
    disabled = false,
    limit = 4,
    rules,
    ...rest
}) => {
    const { control } = useFormContext();
    const {
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
    } = useSelect({ options, multiple, limit, disabled });

    const handleKeyDown = (
        e: React.KeyboardEvent,
        fieldValue: SelectOption[],
        onChange: (value: SelectOption[]) => void
    ) => {
        if (!isOpen && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        setIsOpen(true);
        return;
    }

    if (isOpen) {
        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();
                setFocusedIndex(Math.min(focusedIndex + 1, filteredOptions.length - 1));
                listItemsRef.current[focusedIndex + 1]?.focus();
            break;
            case "ArrowUp":
                e.preventDefault();
                setFocusedIndex(Math.max(focusedIndex - 1, -1));
                if (focusedIndex === 0) searchInputRef.current?.focus();
                else listItemsRef.current[focusedIndex - 1]?.focus();
            break;
            case "Enter":
                e.preventDefault();
                if (focusedIndex >= 0) {
                    toggleSelect(filteredOptions[focusedIndex], fieldValue, onChange);
                }
            break;
            case "Escape":
                setIsOpen(false);
                setFocusedIndex(-1);
            break;
        }
    }
  };

    const toggleSelect = (
        option: SelectOption,
        fieldValue: SelectOption[],
        onChange: (value: SelectOption[]) => void
    ) => {
        if (multiple) {
            const newValue = fieldValue.some((sel) => sel.value === option.value)
                ? fieldValue.filter((sel) => sel.value !== option.value)
                : [...fieldValue, option];
            onChange(newValue.length <= limit ? newValue : fieldValue);
        }
        
        if (!multiple) {
            onChange(option.value === fieldValue[0]?.value ? [] : [option]);
            setIsOpen(false);
        }
    };

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field: { onChange, value = [] } }) => (
                <div className="mb-4 relative" ref={selectRef} {...rest}>
                    <label className="block text-sm font-medium text-gray-700">
                        {label} {required && <span className="text-red-500">*</span>}
                    </label>

                    <SelectTrigger
                        value={value}
                        placeholder={placeholder}
                        isOpen={isOpen}
                        disabled={disabled}
                        onSelect={(option) => toggleSelect(option, value, onChange)}
                        toggleOpen={() => setIsOpen(!isOpen)}
                        onKeyDown={(e) => handleKeyDown(e, value, onChange)}
                    />

                    <SelectContent
                        isOpen={isOpen}
                        search={search}
                        setSearch={setSearch}
                        filteredOptions={filteredOptions}
                        focusedIndex={focusedIndex}
                        onSelect={(option) => toggleSelect(option, value, onChange)}
                        onKeyDown={(e) => handleKeyDown(e, value, onChange)}
                        searchInputRef={searchInputRef}
                        listItemsRef={listItemsRef}
                    />

                    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
                    {required && !error && !disabled && (
                        <p className="mt-1 text-sm text-gray-500">This information is required.</p>
                    )}
                </div>
            )}
        />
    );
};

export default Select;