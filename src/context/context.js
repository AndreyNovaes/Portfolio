import { createContext } from 'react';

const context = createContext();
// it just create a instance of the context so, i can 
// create specific context for each component but,
// to maintain simple i will just use this one
// and retrieve what i needed by using useContext hook

export default context;
