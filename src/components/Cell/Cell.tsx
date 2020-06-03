import React from "react"
import "./cell.css"
import classNames from "classnames"

interface CellProps {
    posX: Number
    posY: Number
    maxX: Number
    maxY: Number
}

const Cell: React.FC<CellProps> = ({ children, posX , posY, maxX, maxY }) => {
    const isStartEnd = posX === 0 || posX === maxX 
    const isCorner = (posY === 0 && isStartEnd) || (posY === maxY && isStartEnd)
    const isTop = posY === 0 || posY === maxY
    return <div className={classNames({ 
        'cell': true,  
        'corner-piece': isCorner,
        'top-piece': !isCorner && isTop,
        'side-piece': !isCorner && isStartEnd,
        'inner-piece':  !isCorner && !isTop &&!isStartEnd

    })}>x</div>
}

export default Cell;