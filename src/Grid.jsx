import React from 'react'
import Block from './Block.tsx';

const Grid = () => {
  const size = '20px';
  const gridSize = 3;
  const [grid, setGrid] = React.useState(new Array(gridSize).fill(new Array(gridSize).fill(false)))
  console.log({ grid: grid });
  return (
    <div style={{height: '80%', overflow: 'scroll'}}>
        {grid.map((row, i) => {
            return <>
                <div style={{
                    height: size,
                    width: 'max-content'
                }}>
                    {row.map((column, j) => 
                    (<Block 
                        size={size} 
                        i={i} 
                        j={j} 
                        alive={grid[i][j]} 
                        setGrid={setGrid} />)
                    )}
                </div>
            </>
            })
        }
    </div>
  )
}

export default Grid