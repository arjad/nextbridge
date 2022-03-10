import {Fname} from "../App";

export default function Compc() 
{
  return (
    <Fname.Consumer>
      {
        (Fname)=>{
          return <h1>Comp c{Fname.name}</h1>}
      }
  </Fname.Consumer>
  );
}
