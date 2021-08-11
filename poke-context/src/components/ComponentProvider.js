import { useState, createContext } from 'react';

export const UserContext = createContext()

const ComponentProvider = () => {
    const [isLogged, setLogged] = useState(false);
    const isLoggedValue = {
        state: isLogged,
        setState: setLogged
    };

    return (
        <UserContext.Provider value={isLoggedValue}></UserContext.Provider>
    )
}

export default ComponentProvider;