import React from 'react';

const Grid = ({ rows, columns, children }) => {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '16px',
        justifyContent: 'space-between',
        width: '100%'
    };

    return (
        <div style={gridStyle}>
            {children}
        </div>
    );
};

export default Grid;
