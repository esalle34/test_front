import { ReactElement } from "react";
import ReactDOM from "react-dom";

var x:any;
var y:any;
var z:any;

var result:any;

function Calculette():ReactElement{

    //TODO : implement Division

    return <div><form className="w-full">
        <div className="flex justify-center">
    <div className="mr-6 md:mb-0">
    <input type="text" name="x" placeholder="Renseigner un chiffre..." className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" onChange={(e)=>{x=e.target.value}}></input>
    </div>
    <div className="mr-6 md:mb-0">
    <input type="text" name="y" placeholder="Renseigner un deuxième chiffre..." className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" onChange={(e)=>{y=e.target.value}}></input>
    </div>
    <div className="md:mb-0">
    <input type="button" className="cursor-pointer flex-shrink-0 bg-blue-500 hover:bg-blue-700 text-sm border-4 text-white py-1 px-2 rounded" name="z" onClick={()=>{
        result = parseInt(x)+parseInt(y);
        ReactDOM.render(
            <div>{result.toString()}</div>,
            document.getElementById("result")
        )
    }} value="+"></input>
    <input type="button" className="cursor-pointer flex-shrink-0 bg-blue-500 hover:bg-blue-700 text-sm border-4 text-white py-1 px-2 rounded" name="z" onClick={()=>{
        result = parseInt(x)-parseInt(y);
        ReactDOM.render(
            <div>{result.toString()}</div>,
            document.getElementById("result")
        )
    }} value="-"></input>
    <input type="button" className="cursor-pointer flex-shrink-0 bg-blue-500 hover:bg-blue-700 text-sm border-4 text-white py-1 px-2 rounded" name="z" onClick={()=>{
        result = parseInt(x)*parseInt(y);
        ReactDOM.render(
            <div>{result.toString()}</div>,
            document.getElementById("result")
        )
    }} value="x"></input></div></div><hr />Résultat : <div className="w-full justify-center" id="result"></div></form>
                </div>

    
}

export default Calculette;