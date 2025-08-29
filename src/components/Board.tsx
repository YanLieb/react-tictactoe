import { useState } from 'react'

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const handleClick = (i: number) => {
    const nextSquares = squares.slice();
    nextSquares[i] = "X"
    setSquares(nextSquares)
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )
}

type SquareProps = {
  value: string | null,
  onSquareClick: () => void
}

function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className="square" style={styles.button} onClick={onSquareClick}>
      {value}
    </button>
  )
}

const styles = {
  button: {
    background: "#fff",
    border: "1px solid #999",
    cssFloat: "left",
    fontSize: "24px",
    fontWeight: "bold",
    lineHeight: "34px",
    height: "34px",
    marginRight: "-1px",
    marginTop: "-1px",
    padding: 0,
    textAlign: "center" as const,
    width: "34px"
  }
}