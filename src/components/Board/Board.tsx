import React from "react"
import { Flex, Box } from "rebass"

import { configureBoardArray } from "./Board.library"
import { configuration } from "../../constants/properties"

import Cell from "../Cell"

const BoardContainer: React.FC = (props) => {
  return <Box
    display="inline-block"
    sx={{
      borderStyle: "solid",
      borderColor: "black",
      borderSize: 1,
      flexShrink: 0
    }}
    {...props}
  />
}

const RowContainer: React.FC = props => {
  return <Flex
    wrap="no-wrap"
    flexShrink={0}
    {...props}
  />
}


const Board: React.FC = () => {
  const board = configureBoardArray(configuration)
  return (
    <BoardContainer>
      {board.map((row, i) => {
        return (
          <RowContainer key={row[0].coordinateY}>
            {row.map(cell => {
              return (
                <Cell
                  key={cell.coordinateX + "-" + cell.coordinateY}
                  {...cell}
                >
                  {cell.coordinateX + "-" + cell.coordinateY}
                </Cell>)
            })}
          </RowContainer>
        )
      })}
    </BoardContainer>
  )
}

export default Board