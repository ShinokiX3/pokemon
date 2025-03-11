import React, { useEffect, useState } from 'react';
import { useFetchMultiplePokemons } from '../../hooks/usePokemonApi';
import Modal from '../../components/modal/modal';
import { PokemonFormData } from '../../schema/pokemon.type';
import Badge from '../../ui/badge/badge';

interface PokemonModalProps {
    data: PokemonFormData | null
}

const PokemonModal: React.FC<PokemonModalProps> = ({ data }) => {
    const [modalOppened, setModalOppened] = useState<boolean>(!!data);
    const { pokemons, loading, error } = useFetchMultiplePokemons(data ? data.pokemon.map(pokemon => pokemon.value) : []);

    useEffect(() => {
        if (!!data) setModalOppened(true);
    }, [data]);

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>

    return (
        <Modal 
            header='Your fighters'
            oppened={modalOppened} 
            close={() => setModalOppened(false)}
        >
            <div className='min-w-[340px] flex gap-4 text-center mt-5 flex-wrap justify-center max-h-[60dvh] overflow-auto'>
                {pokemons && pokemons.map(pokemon => (
                    <div 
                        key={pokemon.name}
                        className='bg-gray-50 p-2 rounded-[8px] flex flex-col items-center w-[200px]'
                    >
                        <img className='w-[100px]' src={pokemon.sprites.front_default || ''} alt={`${pokemon.name}`} />
                        <p className='text-sm font-bold italic'>{pokemon.name}</p>
                        <div className='flex max-w-[200px] flex-wrap'>
                            {pokemon.abilities.map(({ ability }) => (
                                <Badge 
                                    key={ability.name} 
                                    value={ability.name}
                                    bgColor='bg-pink-500'
                                    color='text-pink-100'
                                    className='w-fit m-1'
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Modal>
    );
};

export default PokemonModal;