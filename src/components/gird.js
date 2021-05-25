import React, { useState } from 'react';

import Square from './square';
import colorArray from '../puzzleVariables/colorArray';
import createPuzzle from '../puzzleFunctions/createPuzzle';

import '../css/grid.css';
import removeIsland from '../puzzleFunctions/removeIsland';
import liftZeros from '../puzzleFunctions/lifZeros';
import replaceZeros from '../puzzleFunctions/replaceZeros';



// function handleClick(grid, r, c, selected){
//     removeIsland(grid, r, c, selected, [])

// }



export default function Grid(){

    let puzzle = createPuzzle();
    const [gridPuzzle, setGridPuzzle] = useState(puzzle);
    const [score, setScore] = useState(0);
    const [moves, setMoves] = useState(25);
    const [gameOver, setGameOver] = useState(false);
  
    const handleClick = (grid, r, c, selected, listOfCords) => { 
        let newGrid = [...grid];
        let points = removeIsland(newGrid, r, c, selected, listOfCords)

        if (moves === 1)
            setGameOver(true);
        if (score >= 2990)
            setGameOver(true);

        setMoves(moves - 1);

       

        if (points >= 3 && points < 5){
            points = points * 2;
        } else if (points === 5){
            points = points * 3;
        } else if (points > 5){
            points = points * 10;
        }

        setScore(score + (5 * points));
        liftZeros(newGrid);
        replaceZeros(newGrid);
        setGridPuzzle(newGrid);

    }

    const fillPuzzle = (puzzle) => {

        let squareArray = [];
        const lengthI = puzzle.length;
        const lengthK = puzzle[0].length;

        for (let i = 0; i < lengthI; i += 1){
            for (let k = 0; k < lengthK; k += 1){
                squareArray.push(<Square 
                    puzzle={puzzle}
                    row={i}
                    col={k}
                    selection={puzzle[i][k]}
                    clickResponse={handleClick}
                    color={colorArray[puzzle[i][k]]} />)
            }
        }
        return squareArray;
    }

    return (
        <div className="grid">
            <div className="info">
                {score < 3000 && moves > 0 &&  <div>{score}</div> }
                {score >= 3000 && <div> You Did it!!</div>}
                {moves <= 0 && <div>Game Over. Better Luck Next time.</div>}
                {score < 3000 && moves > 0 &&  <div>{moves}</div> }
                
                </div>
            <div className="puzzle-container">
            {fillPuzzle(gridPuzzle)}
            </div>
        </div>    
    )
}