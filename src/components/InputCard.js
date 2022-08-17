import { useState, useRef } from "react";
import GenerateBtn from "./GenerateBtn";

const InputCard = (props) =>{
    const [userInput, setUserInput] = useState(''); 
    const ref = useRef(); 
    const handleUserInput = (e) =>{
        e.preventDefault(); 
        setUserInput(ref.current.value)
    }

    console.log(userInput.match(regex));  

    return(
        <div>
            <p>Insert your color codes here:</p>
            <div>
                <form>
                    <textarea rows="15" cols="60" ref={ref}/>
                    <GenerateBtn onClick={handleUserInput}/>
                </form>
            </div>
        </div>
    )
}

export default InputCard; 