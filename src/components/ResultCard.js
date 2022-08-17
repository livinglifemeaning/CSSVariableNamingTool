import CopyBtn from "./CopyBtn";

const ResultCard = (props) => {


  return (
    <div>
      <p>Result:</p>
      <div>
        
        <p>{props.colors.join(' ')}</p>
        <CopyBtn />
      </div>
    </div>
  );
};

export default ResultCard;
