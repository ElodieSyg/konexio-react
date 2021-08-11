import { useState, createContext } from 'react';

export const PokemonContext = createContext();

const HistoryContext = (props) => {
    const [history, setHistory] = useState([]);
    const value = {
        state: history,
        setState: setHistory,
    };

    return (
        <PokemonContext.Provider value={value}>
            {props.children}
        </PokemonContext.Provider>
    );
};

export default HistoryContext;