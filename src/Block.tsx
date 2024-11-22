import React from 'react'

const Block = ({ size, i, j, alive, setGrid }) => {
  console.log({ i, j, alive});
  const onClick = () => {
    console.log('click');
    console.log({ i, j, alive: alive });
    setGrid((state) => {
      console.log(state);
      console.log(state[i][j], i, j);
      // return [...state];
      state[i][j] = !state[i][j];
      console.log({ x: state[i][j] })
      console.log({ update: state });
      return [...state];
    })
  }
  return (
    <span 
      style={{
        height: size,
        width: size,
        minHeight: `2px`,
        minWidth: `2px`,
        border: `0.5px solid black`,
        padding: 0,
        margin: 0,
        display: 'inline-block',
        color: alive ?'black':'white'
    }}
      onClick={onClick}></span>
  )
}

// Memoize this component
export default Block