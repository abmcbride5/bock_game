import '../css/square.css';

/**
 * 
 * row={i}
                col={k}
                selection={puzzle[i][k]} 
 */
export default function Square(props) {

    // console.log("square",props.row, props.col, props.selection)
    return <button className={props.color} onClick={() => props.clickResponse(props.puzzle, props.row, props.col, props.selection, [])}></button>
    
}