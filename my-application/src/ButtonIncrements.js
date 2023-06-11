import {useState} from 'react';

const ButtonIncrements = () => {
    const [countIncr, setCountIncr] = useState(0) 
    const [countDecr, setCountDecr] = useState(0)

    const handleIncr = () => {
        setCountIncr(countIncr + 1)
    }

    const handleDecr = () => {
        setCountDecr(countDecr - 1)
    }

    const handleReset = () => {
        setCountIncr(countIncr - countIncr)
        setCountDecr(countDecr - countDecr)
    }

    return (
        <>
            <button className="btn" onClick={ handleIncr }>
                incr = {countIncr}
            </button>
            <button className="btn" onClick={ handleDecr }>
                decr = {countDecr}
            </button>
            <button className="btn" onClick={ handleReset }>
                reset
            </button>
        </>
    );
}

export default ButtonIncrements;