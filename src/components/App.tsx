import { Field } from "./Field";

export const App = ( ) => {
    return (
        <div className="main">
            <div className="chessboard">
        <>
            { 
                [1,2,3,4,5,6,7,8].map((i) => {
                    return <Field rowNumber={i} key={i}/>
                })
            }
        </>
        </div>
        <div className="display">
            <h5 id="display">Result: <span className="result">0</span></h5>
        </div>
        </div>
    );
}