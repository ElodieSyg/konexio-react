import { useState, createContext } from 'react';

export const UserContext = createContext();

const LogContext = (props) => {
    const [isLogged, setLogged] = useState(false);
    const value = {
        state: isLogged,
        setState: setLogged,
    };

    return (
/*       <UserContext.Provider value={isLoggedValue}>
            <OtherContext.Provider value={otherValue}>
                {props.children}
            </OtherContext.Provider> */

        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
};

export default LogContext;