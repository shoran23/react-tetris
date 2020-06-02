import React from 'react'
import Square from './Square.js'
import '../css/gameboard.css'

const x = 0;
const y = 1;
const width = 0;
const heigth = 1;

class Gameboard extends React.Component {
    state = {
        position: [0,0],
        gameboard: [
            {
                name: 'Gameboard 6x10',
                size: [6,10],
                coordinate: [
                    '9,0','9,1','9,2','9,3','9,4','9,5',
                    '8,0','8,1','8,2','8,3','8,4','8,5',
                    '7,0','7,1','7,2','7,3','7,4','7,5',
                    '6,0','6,1','6,2','6,3','6,4','6,5',
                    '5,0','5,1','5,2','5,3','5,4','5,5',
                    '4,0','4,1','4,2','4,3','4,4','4,5',
                    '3,0','3,1','3,2','3,3','3,4','3,5',
                    '2,0','2,1','2,2','2,3','2,4','2,5',
                    '1,0','1,1','1,2','1,3','1,4','1,5',
                    '0,0','0,1','0,2','0,3','0,4','0,5'
                ]
            }
        ]
    }


    testPositionChange = () => {
        console.log("Test Position Change")
        // if(this.state.position[x] > 0){
        //     let array = this.state.position
        //     array[x] -= 1
        //     this.setState({position: array})
        //     setTimeout(this.testPositionChange,1000)
        // }
 
        this.setState({position: [9,5]})
    }

    render() {

        console.log('Position State: ',this.state.position)
        console.log('Position: ',`${this.state.position[x]},${this.state.position[y]}`)

        return (
            <div className='gameboard'>
                {this.state.gameboard[0].coordinate.map((coordinate,index) => (
                    <div>
                        {coordinate === `${this.state.position[x]},${this.state.position[y]}` ?
                            <Square 
                                key={index}
                                id={coordinate}
                                width={'20px'}
                                height={'20px'}
                                borderWidth={'1px'}
                                borderColor={'black'}
                                color={'lightblue'}
                            />
                        :
                            <Square 
                                key={index}
                                id={coordinate}
                                width={'20px'}
                                height={'20px'}
                                borderWidth={'1px'}
                                borderColor={'black'}
                                color={'gray'}
                             />
                        }
                    </div>
                ))}
            </div>
        )
    }
    componentDidMount() {
        setTimeout(this.testPositionChange,2000)
    }
}
export default Gameboard