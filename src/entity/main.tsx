import { useState } from 'react';
import PokemonForm from '../features/pokemon/form';
import PokemonModal from '../features/pokemon/modal';
import { PokemonFormData } from '../schema/pokemon.type';

const Main = () => {
    const [data, setData] = useState<PokemonFormData | null>(null);

    return (
        <main>
            <PokemonForm setData={setData} />
            <PokemonModal data={data} />
        </main>
    );
};

export default Main;