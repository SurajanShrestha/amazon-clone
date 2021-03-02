import React,{useReducer,useContext} from 'react';

export const StateContext=React.createContext();

/*export const StateProvider=({children})=>{
    const [bookName,setName]=useState('Harry Potter and the Half Blood Prince');
    return(
        <StateContext.Provider value={{name: bookName,changeName: setName}}>
            {children}
        </StateContext.Provider>
    );
}*/
export const StateProvider=({reducer,initialState,children})=>{
    return(
        <StateContext.Provider value={useReducer(reducer,initialState)}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateValue=()=>useContext(StateContext);
