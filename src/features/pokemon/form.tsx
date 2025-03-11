import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useFetchPokemons } from "../../hooks/usePokemonApi";
import Input from "../../ui/input/input";
import { namePattern, nameValidations, pokeSelectFourValidations } from "./utils";
import { Button } from "../../stories/Button";
import { PokemonFormData } from "../../schema/pokemon.type";
import Select from "../../ui/select/select";
import type { SelectOption } from "../../ui/select/select.type";

interface FieldsProps {
    register: any;
    errors: any;
}

const Fields: React.FC<FieldsProps> = ({ register, errors }) => {
    const { 
        pokemons, 
        loading, 
        error 
    } = useFetchPokemons();

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>

    return (
        <div className="flex flex-col gap-2">
            <Input
                {...register("firstname", {
                    pattern: namePattern,
                    validate: nameValidations,
                })}
                label="Firstname"
                error={errors.firstname?.message}
                placeholder="Write here..."
                required
            />

            <Input
                {...register("surname", {
                    pattern: namePattern,
                    validate: nameValidations,
                })}
                label="Surname"
                error={errors.surname?.message}
                placeholder="Write here..."
                required
            />

            <Select 
                name="pokemon"
                rules={{ validate: pokeSelectFourValidations<SelectOption> }}
                label='Select pokemon' 
                multiple 
                options={pokemons.map(({ name, url }) => ({ label: name, value: name, url: url }))} 
                error={errors.pokemon?.message}
                required
            />
        </div>
    )
}

interface ControlsProps {
    clear: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}

const Controls: React.FC<ControlsProps> = ({ clear, disabled = false }) => {
    return (
        <div className="flex gap-1.5 justify-end">
            <Button 
                label="Cancel" 
                type="button" 
                onClick={clear} 
                disabled={disabled}
            />

            <Button 
                label="Save" 
                type='submit' 
                primary 
                disabled={disabled} 
            />
        </div>
    )
}

interface PokemonFormProps {
    setData: React.Dispatch<React.SetStateAction<PokemonFormData | null>>;
}

const PokemonForm: React.FC<PokemonFormProps> = ({ setData }) => {
    const methods = useForm<PokemonFormData>({
        defaultValues: {
            firstname: "",
            surname: "",
            pokemon: [],
        },
    });

    const { 
        register, 
        handleSubmit, 
        reset,
        formState: { errors }, 
    } = methods;

    const submit: SubmitHandler<PokemonFormData> = (data) => setData(data);
    const clear: React.MouseEventHandler<HTMLButtonElement> = () => reset();

    return (
        <div className='h-screen flex items-center justify-center'>
            <FormProvider {...methods}>
                <form 
                    onSubmit={handleSubmit(submit)}
                    className="flex flex-col gap-2 min-w-[340px] p-[8px]"
                >
                    <Fields
                        register={register} 
                        errors={errors} 
                    />

                    <Controls 
                        clear={clear} 
                    />
                </form>
            </FormProvider>
        </div>
    );
};

export default PokemonForm;
