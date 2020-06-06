import React, { useMemo } from 'react'
import { Flex } from 'rebass'

import { getRotation } from "./InfoContainer.library"
import { CellTileConfiguration } from "../../interfaces/Board"

interface CellTitleProps {
  cell: CellTileConfiguration
}

const CellTitle: React.FC<CellTitleProps> = ({ cell }) => {
  const degrees = useMemo(() => getRotation(cell), [cell])

  return (
    <Flex justifyContent="center" alignItems="center" fontSize={0} padding={0} sx={{
      transform: `rotate(${degrees}deg)`
    }}>
      {cell.title}
    </Flex>
  )
}

export default CellTitle
