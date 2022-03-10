import "./styles.css";
import Compa from "./comp/Compa";
import { createContext } from "react";

const Fname=createContext();

export default function App() 
{

  return (
  <Fname.Provider value={{name:"ali"}}>
    <Compa/>
  </Fname.Provider>
  );
}
export {Fname};