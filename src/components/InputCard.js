import React from "react";
import GenerateBtn from "./GenerateBtn";

const InputCard = React.forwardRef((props, ref) => {
  return (
    <div>
      <p>Insert your color codes here:</p>
      <div>
        <form>
          <textarea rows="15" cols="60" ref={ref} />
          <GenerateBtn onClick={props.handleUserInput} />
        </form>
      </div>
    </div>
  );
});

export default InputCard;
