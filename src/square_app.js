import React, { useState } from 'react';
//Components
import { Button } from 'antd';
//Custom Styles
import './index.css';

const SquaresApp = () => {
    const [squares, setSquares] = useState([]);
    console.log(squares, 'squares here')

    const handleAddSquare = (index) => {
        const newSquare = squares.length + 1;
        const updatedSquares = [...squares];
        updatedSquares.splice(index, 0, newSquare);
        setSquares(updatedSquares);
    };

    return (
        <div className="SquaresApp">
            {squares.length === 0 && <Button className="add-button" onClick={()=> handleAddSquare(0)}>
                +
            </Button>}
            <div className="squares-container">
                {squares.map((square, index) => (
                    <div className="square-container" key={square}>
                        <div className="square">{square}</div>
                        <Button
                            className="add-button"
                            onClick={() => handleAddSquare(index + 1)}
                        >
                            +
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SquaresApp;