import React from "react"
import "./board.css"
import { buildBoardArray } from "./Board.library"
import Cell from "../Cell"

const HEIGHT = 11;
const WIDTH = 11;



const Board: React.FC = ({ }) => {
    const board = buildBoardArray(HEIGHT, WIDTH)
    return (
        <div className="board">
            {board.map((row, i) => {
                return (
                    <div key={row[0].positionY} className="row">
                        {row.map(cell => {
                            return (
                                <Cell 
                                    key={cell.positionX + "-" + cell.positionY}
                                    {...cell}
                                    maxX={WIDTH-1}
                                    maxY={HEIGHT-1}
                                    
                                >
                                    {cell.positionX + "-" + cell.positionY}
                                </Cell>)
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Board