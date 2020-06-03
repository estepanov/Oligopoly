import React from "react"
import "./cell.css"
import classNames from "classnames"

import { CellConfiguration } from "../../interfaces/Board"

interface CellProps extends CellConfiguration {
    maxX: number
    maxY: number
}

const Cell: React.FC<CellProps> = ({ 
    // cell configuration props
    positionX: x,
    positionY: y,
    isBottomRow,
    isTopRow,
    isLeftColumn,
    isRightColumn,
    isEdge,
    isCorner,
    // component only props
    children,
    maxX, 
    maxY
}) => {
    return <div className={classNames({
        'cell': true,
        'corner-piece': isCorner,
        'top': isTopRow,
        'right': isRightColumn,
        'bottom': isBottomRow,
        'left': isLeftColumn,
        'top-edge': !isCorner && isTopRow,
        'right-edge': !isCorner && isRightColumn,
        'bottom-edge': !isCorner && isBottomRow,
        'left-edge': !isCorner && isLeftColumn,

    })}>{children}</div>
}

export default Cell;