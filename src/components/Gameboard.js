import React from 'react'
import Square from './Square.js'
import '../css/gameboard.css'

const x = 0;
const y = 1;
const width = 0;
const heigth = 1;

class Gameboard extends React.Component {
    testPositionChange = () => {
        console.log("Test Position Change")
        // if(this.state.position[x] > 0){
        //     let array = this.state.position
        //     array[x] -= 1
        //     this.setState({position: array})
        //     setTimeout(this.testPositionChange,1000)
        // }

        //this.setState({gameboard: this.props.gameboard})
    }

    render() {

        console.log('Position: ',`${this.props.position[x]},${this.props.position[y]}`)


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