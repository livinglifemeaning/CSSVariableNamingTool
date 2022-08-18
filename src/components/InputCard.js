import React from "react";

import GenerateBtn from "./GenerateBtn";

const InputCard = React.forwardRef((props, ref) => {
  return (
    <div>
      <p className="cardTitle">Insert your color values here:</p>
      <form className="card">
        <textArea minRows={20} ref={ref} />
      </form>
      <GenerateBtn onClick={props.handleUserInput} />
    </div>
  );
});

export default InputCard;
