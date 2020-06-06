import React from 'react'
import { Flex } from 'rebass'

import { CellTileConfiguration } from "../../interfaces/Board"

import { getDirection } from "./InfoContainer.library"

interface InfoContainerProps {
  cell: CellTileConfiguration
}

const InfoContainer: React.FC<InfoContainerProps> = ({ cell, children }) => {
  return (
    <Flex
      sx={{
        // transform: `rotate(${degrees}deg)`,
        flexDirection: getDirection(cell)
      }}
    >
      {children}
    </Flex>
  )
}

export default InfoContainer
