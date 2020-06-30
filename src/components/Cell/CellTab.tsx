import React, { useMemo } from 'react'
import { Box } from 'rebass'

import { CellTileConfiguration } from '../../interfaces/Board'
import { getRotation } from './InfoContainer.library'



interface CellTabProps {
  cell: CellTileConfiguration
  size?: string
}

const TAB_SIZE = "20px"

const CellTab: React.FC<CellTabProps> = ({ cell, size = TAB_SIZE }) => {
  const [width, height] = useMemo(() => {
    const rotation = getRotation(cell)
    return [
      rotation === 0 ? "100%" : size, // width
      rotation === 0 ? size : "100%" // height
    ]
  }, [cell, size])
  return (
    <Box
      sx={{
        opacity: 0.3,
        backgroundColor: cell.color,
        width,
        height,
      }}
    />
  )
}

export default CellTab
