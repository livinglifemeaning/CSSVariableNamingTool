import CopyBtn from "./CopyBtn";

const ResultCard = (props) =>{
    return(
        <div>
            <p>Result:</p>
            <div>
                <form>
                <textarea rows="15" cols="60" />
                    <CopyBtn/>
                </form>
            </div>
        </div>
    )
}

export default ResultCard; 