export enum CellTypes {
    leftCorner = 'LEFT'
}

export interface CellConfiguration {
    positionX: number;
    positionY: number;
    isTopRow: boolean;
    isBottomRow: boolean;
    isLeftColumn: boolean;
    isRightColumn: boolean;
    isCorner: boolean;
    isEdge: boolean;
}

// export interface PropertyConfiguration {
//     title?: string;
//     group?: string;
// }

// export interface 