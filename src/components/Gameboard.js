import React from 'react'
import Square from './Square.js'
import '../css/gameboard.css'

const x = 0;
const y = 1;
const width = 0;
const heigth = 1;

class Gameboard extends React.Component {
    render() {
        return (
            <div className='gameboard'
                style={{
                    width: 'auto',
                    height: 'auto',
                    display: 'grid'
                }}
            >
                {this.props.gameboard.coordinates.map((coordinate,index) => (
                    <div>
                        <Square 
                            key={index}
                            id={coordinate}
                            width={'100px'}
                            height={'100px'}
                            borderWidth={'1px'}
                            borderColor={'black'}
                            color={'gray'}
                            />
                    </div>
                ))}
            </div>
        )
    }
}
export default Gameboard