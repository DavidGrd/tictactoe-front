import React, {useEffect, useState} from "react";
import { calculateWinner} from "../helper";
import Board from "./Board";

const Game = (names) => {
    const [status, setStatus] = useState([Array(9).fill(null)]);
    const [stepNumber,setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(status[stepNumber]);
    const xO = xIsNext ? "X" : "O";

    const handleClick = (i) => {
        const historyPoint = status.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];

        if (winner || squares[i]) return;

        squares[i] = xO;
        setStatus([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setXisNext(!xIsNext);
    };

    useEffect(() => {
        console.log(status[stepNumber]);
      }, [status[stepNumber]])


    const restart = () =>
        setStepNumber(0)
    

    return (
        <>  <div style={{display:'flex', flexDirection:'column', marginLeft:'10vh'}}>
                <h1>TicTacToe</h1>
                <div style={{display:'flex', flexDirection:'column', marginLeft:'5vh', backgroundColor: '#f4ede3'}}>
                    <Board squares={status[stepNumber]} onClick={handleClick} />
                    <div className="info-wrapper">
                        <div>
                            <button onClick={() => restart()}>Restart</button>
                        </div>
                        <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Game;